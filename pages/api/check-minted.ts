import { Prisma } from "@prisma/client";
import { ethers } from "ethers";
import { NextApiHandler } from "next";
import { prisma } from "../../lib/prisma";
import { verifyMarried } from "../../lib/verify";

const handler: NextApiHandler = async (req, res) => {
    if (req.method === "POST") {
        try {
            if (!req.body.id) {
                res.status(400).json({
                    message: "no id or no action",
                })
            }
            const reqId = req.body.id;
            const token = await prisma.token.findFirst({
                where: {
                    id: reqId,
                },
                orderBy: {
                    createdAt: "desc",
                },
            });
            if (!token) {
                return res.status(400).json({
                    message: "no token",
                });
            }
            if (req.body.action == 0) {
                res.status(200).json(token.minted);
                return;
            }
            else if (req.body.action == 1) {
                if (token.minted == 1) {
                    return res.status(400).json({
                        message: "token already minted",
                    })
                }
                await prisma.token.update({
                    where: { id: reqId },
                    data: { minted: 1 },
                });
                const tokenFound = await prisma.token.findFirst({
                    where: { id: reqId },
                });
                await prisma.offers.update({
                    where: { id: tokenFound.offersId },
                    data: ({ totalMinted: { increment: 1 } }),
                });
                res.status(200).json(1);
                return;
            }
            else if (req.body.action == 2) {
                if (req.body.tokenId = undefined) {
                    return res.status(400).json({
                        message: "no tokenId",
                    });
                }
                await prisma.token.update({
                    where: {
                        id: reqId,
                    },
                    data: {
                        tokenId: req.body.tokenId,
                    },
                })
                res.status(200).json(2);
                return;
            }
        } catch (e) {
            console.error(e);
            res.status(400).json({
                message: "get offer error",
            });
            return;
        }
    } else {
        res.status(404).send({
            message: "error",
        });
        return;
    }
};

export default handler;