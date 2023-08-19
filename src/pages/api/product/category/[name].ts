import clientPromise from "@/lib/mongo";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await clientPromise;
  const db = client.db("daisy-pc");
  const products = await db
    .collection("products")
    .find({ category: req.query?.name })
    .toArray();

  res.status(200).json({ products });
}
