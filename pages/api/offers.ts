import { Prisma } from "@prisma/client";
import { ethers } from "ethers";
import { NextApiHandler } from "next";
import { prisma } from "../../lib/prisma";
import { verifyMarried } from "../../lib/verify";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    const address = req.query.address as string;
    const pageIndex = Number(req.query.pageIndex as string) || 1;
    const pageSize = 10;
    if (address) {
      const offers = await prisma.token.findMany({
        where: {
          Raddress: address.toLowerCase(),
        },
        select: {
          Bsignature: false,
          id: true,
          tokenId: true,
          Bname: true,
          Iaddress: true,
          Caddress: true,
          createdAt: true,
          minted: true,
          burnAuth: true,
          nftName: true,
          Aname: true,
          expirationDate: true,
          Acomment: true,
          cover: true,
          coverArw: true,
          metaIPFS: true,
          metaArw: true,
        },
        orderBy: {
          createdAt: "desc",
        },
        skip: (pageIndex - 1) * pageSize,
        take: pageSize,
      });
      res.send({
        offers,
        total: await prisma.token.count({
          where: {
            Raddress: address.toLowerCase(),
          },
        }),
      });
    } else {
      const offers = await prisma.offers.findMany({
        where: {
          status: 2,
        },
        orderBy: {
          updatedAt: "desc",
        },
        select: {
          Asignature: false,
          Bsignature: false,
          id: true,
          Aaddress: true,
          Baddress: true,
          Asex: true,
          Bsex: true,
          Aname: true,
          Bname: true,
          status: true,
          createdAt: true,
          updatedAt: true,
          AtokenId: true,
          BtokenId: true,
          Acomment: true,
          Bcomment: true,
          Acover: true,
          Bcover: true,
          imageData: true,
          bgIndex: true,
          mintedAt: true,
        },
        skip: (pageIndex - 1) * pageSize,
        take: pageSize,
      });
      res.send({
        offers,
        total: await prisma.offers.count({
          where: {
            status: 2,
          },
        }),
      });
    }
  } else {
    res.status(404).send({
      message: "error",
    });
    return;
  }
};

export default handler;
