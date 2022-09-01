import { Prisma } from "@prisma/client";
import { ethers } from "ethers";
import { NextApiHandler } from "next";
import { prisma } from "../../lib/prisma";
import { verifyMarried } from "../../lib/verify";

const handler: NextApiHandler = async (req, res) => {
    if (req.method === "GET") {
        try {
            // verify signature
            if (!req.body.tokenId) {
                return res.status(400).json({
                    message: "name empty",
                });
            }
            const token = await prisma.token.findFirst({
                where: {
                    id: req.body.tokenId,
                },
            });

            if (token) {
                res.status(200).json(token);
                return;
            }
            else {
                res.status(400).json({
                    message: "database error",
                });
                return;
            }
        } catch (e) {
            console.error(e);
            res.status(400).json({
                message: "update offer error",
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