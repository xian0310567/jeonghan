import type { NextApiRequest, NextApiResponse } from "next";

import getComments from "./service/getComments";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      return getComments(req, res);
    case "POST":
    //   return create(req, res);
    default:
      res.send("값을 찾을 수 없습니다.");
      res.status(404);
  }
}
