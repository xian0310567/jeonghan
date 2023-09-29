import type { NextApiRequest, NextApiResponse } from "next";

import vericficate from "./service/verificateAdmin";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "POST":
      return vericficate(req, res);
    default:
      res.send("값을 찾을 수 없습니다.");
      res.status(404);
  }
}
