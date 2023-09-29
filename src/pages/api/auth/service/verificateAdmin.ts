import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const verificateAdmin = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.body.key) return res.status(403).send("not found key");

  const key = await prisma.admin.findUnique({
    where: {
      key: req.body.key,
    },
  });

  if (!key) return res.status(403).send(key);

  return res.status(200).send(key);
};

export default verificateAdmin;
