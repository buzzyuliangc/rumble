import { Prisma } from "@prisma/client";
import { ethers } from "ethers";
import { NextApiHandler } from "next";
import { prisma } from "../../lib/prisma";
import uploadToIPFS from "../../lib/upload";
import { verifyMarried } from "../../lib/verify";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    try {
      let verfiyAddress;
      if (req.query.nonce && req.query.signature) {
        const hash = ethers.utils.keccak256(
          ethers.utils.defaultAbiCoder.encode(["string"], [req.query.nonce])
        );

        const message = ethers.utils.arrayify(hash);

        verfiyAddress = ethers.utils.verifyMessage(
          message,
          req.query.signature as string
        );
      }

      const id = req.query.id as string;
      const offer = await prisma.offers.findFirst({
        where: {
          id,
        },
      });
      if (!offer) {
        return res.status(400).json({
          message: "no offer",
        });
      } else {
        if (verfiyAddress) {
          if (offer.Aaddress === verfiyAddress.toLowerCase()) {
            const ipfs = await uploadToIPFS(req.body.imageData);
            const ipfs2 = await uploadToIPFS(req.body.imageData2);
            await prisma.offers.update({
              where: {
                id,
              },
              data: {
                imageData: ipfs,
                imageDataB: ipfs2,
              },
            });
            return res.status(200).json(offer);
          }
        }
      }
    } catch (e) {
      console.error(e);
      res.status(400).json({
        message: "create image error",
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

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};
