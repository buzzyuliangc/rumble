import { Prisma } from "@prisma/client";
import { verify } from "crypto";
import { ethers } from "ethers";
import { NextApiHandler } from "next";
import { prisma } from "../../lib/prisma";

const handler: NextApiHandler = async (req, res) => {
    if (req.method === "POST") {
        try {
            // add verification
            /*if (!req.query.nonce) {
                return res.status(400).json({
                    message: "nonce empty",
                });
            }
            if (!req.query.signature) {
                return res.status(400).json({
                    message: "signature empty",
                });
            }*/
            if (!req.body.Aaddress) {
                return res.status(400).json({
                    message: "address empty",
                });
            }
            if (!req.body.offerId) {
                return res.status(400).json({
                    message: "offer id empty",
                });
            }
            /*const hash = ethers.utils.keccak256(
                ethers.utils.defaultAbiCoder.encode(["string"], [req.query.nonce])
            );

            const message = ethers.utils.arrayify(hash);

            const verfiyAddress = ethers.utils.verifyMessage(
                message,
                req.query.signature as string
            );

            if (verfiyAddress) {
                if (req.body.Aaddress.toLowerCase() === verfiyAddress.toLocaleLowerCase()) {*/
            const tokens = await prisma.token.findMany({
                where: {
                    offersId: req.body.offerId,
                    Iaddress: req.body.Aaddress.toLowerCase(),
                },
            });


            if (tokens != undefined) {
                res.status(200).json(tokens);
                return;
            }
            else {
                res.status(400).json({
                    message: "database error",
                });
                return;
            }
            /*}
            else {
                return res.status(400).json({
                    message: "offer id empty",
                });
            }
        }*/


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