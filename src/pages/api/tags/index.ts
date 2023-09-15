import type { NextApiRequest, NextApiResponse } from "next";

import tagList from "./service/tagList";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      return tagList(req, res);
    case "POST":
    //   return create(req, res);
    default:
      res.send("값을 찾을 수 없습니다.");
      res.status(404);
  }
}
