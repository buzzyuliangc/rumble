import { Prisma } from "@prisma/client";
import { ethers } from "ethers";
import { NextApiHandler } from "next";
import { prisma } from "../../lib/prisma";

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
      if (verfiyAddress != req.body.Aaddress) {
        return res.status(400).json({
          message: "error signature",
        });
      }
      const existingContract = await prisma.contract.findFirst({
        where: {
          Caddress: req.body.contractAddr.toLowerCase(),
        }
      });


      const prismaContract = {
        Caddress: req.body.contractAddr.toLowerCase(),
        Iaddress: req.body.Aaddress.toLowerCase(),
        nftName: req.body.nftName,
        burnAuth: req.body.burnAuth,
      }

      const prismaOffers = {
        Aaddress: req.body.Aaddress.toLowerCase(),
        Aname: req.body.Aname,
        Asignature: req.body.signature,
        Acomment: req.body.Acomment,
        cover: req.body.cover,
        bgIndex: Math.floor(Math.random() * 9) + 1,
        burnAuth: req.body.burnAuth,
        nftName: req.body.nftName,
        expirationDate: req.body.expirationDate,
        contractId: "",
        contractAddr: req.body.contractAddr.toLowerCase(),
        metaIPFS: req.body.metaIPFS,
      };
      if (!prismaOffers.cover) {
        return res.status(400).json({
          message: "cover picture empty",
        });
      }
      if (!prismaOffers.Aname) {
        return res.status(400).json({
          message: "name empty",
        });
      }
      if (prismaOffers.burnAuth === undefined || prismaOffers.burnAuth === null || prismaOffers.burnAuth < 0 || prismaOffers.burnAuth > 3) {
        return res.status(400).json({
          message: "invalid burnauth",
        });
      }
      if (!prismaOffers.nftName) {
        return res.status(400).json({
          message: "nftName empty",
        });
      }
      if (!prismaContract.Caddress) {
        return res.status(400).json({
          message: "contract address empty",
        });
      }


      console.log('offers', prismaOffers);
      console.log('Contact', prismaContract);

      //find if contract object is already created, if yes check address and add id to offers object, if no creat new contract address. 
      const duplicate = await prisma.contract.findFirst({
        where: {
          Caddress: prismaContract.Caddress,
        },
        orderBy: {
          id: "desc",
        },
      });
      console.log("duplicate", duplicate);
      if (duplicate) {
        if (duplicate.Iaddress != req.body.Aaddress.toLowerCase()) {
          return res.status(400).json({
            message: "contract address saved to a different wallet address",
          });
        }
        prismaOffers.contractId = duplicate.id;
      }
      else {
        const contract = await prisma.contract.create({
          data: prismaContract,
        });
        console.log('contract', contract);
        if (!contract) {
          res.status(400).send({
            message: "database error",
          });
          return;
        }
        prismaOffers.contractId = contract.id;
      }

      const offer = await prisma.offers.create({
        data: prismaOffers,
      });
      console.log('offer', offer);
      if (offer) {
        delete offer.Asignature;
        delete offer.Bsignature;
        res.status(200).json(offer);
      }
    } catch (e) {
      console.error(e);
      res.status(400).json({
        message: "create offer error",
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
