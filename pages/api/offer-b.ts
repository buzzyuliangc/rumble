import { Prisma } from "@prisma/client";
import { ethers } from "ethers";
import { NextApiHandler } from "next";
import { prisma } from "../../lib/prisma";
import { verifyMarried } from "../../lib/verify";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    try {
      // verify signature
      if (!req.body.nonce || !req.body.signature) {
        return res.status(400).json({
          message: "no valid signature",
        });
      }
      const hash = ethers.utils.keccak256(
        ethers.utils.defaultAbiCoder.encode(["string"], [req.body.nonce])
      );

      const message = ethers.utils.arrayify(hash);
      const verfiyAddress = ethers.utils.verifyMessage(
        message,
        req.body.signature
      );
      if (verfiyAddress != req.body.address) {
        return res.status(400).json({
          message: "error signature",
        });
      }

      const data = {
        id: req.body.id,
        Baddress: req.body.address.toLowerCase(),
        Bsignature: req.body.signature,
        Bname: req.body.Bname,
      };
      if (!data.Bname) {
        return res.status(400).json({
          message: "name empty",
        });
      }
      const accepted = await prisma.token.findFirst({
        where: {
          offersId: data.id,
          Raddress: data.Baddress,
        },
      });
      if (accepted) {
        return res.status(400).json({
          message: "offer already accepted",
        });
      }
      const result = await prisma.offers.findFirst({
        where: {
          id: data.id,
        },
      });
      if (!result) {
        return res.status(400).json({
          message: "no offer to accept",
        });
      }
      const tokenInfo = {
        offersId: data.id,
        Bsignature: data.Bsignature,
        Bname: data.Bname,
        Iaddress: result.Aaddress,
        Raddress: data.Baddress,
        Caddress: result.contractAddr,
      }


      const token = await prisma.token.create({
        data: tokenInfo,
      });
      if (token && result) {
        await prisma.offers.update({
          where: { id: data.id },
          data: { totalSigned: { increment: 1 } }
        })
        res.status(200).json(token);
        await prisma.offers.update({
          where: { id: data.id },
          data: { totalSigned: { increment: 1 } }
        });
        return;
      }
      else {
        res.status(400).json({
          message: "error",
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
