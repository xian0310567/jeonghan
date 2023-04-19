import type { NextApiRequest, NextApiResponse } from "next";

import { create } from "./service/create";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "POST":
      return res.send(await create(req));
    default:
      res.send("값을 찾을 수 없습니다.");
      res.status(404);
  }
}
