import clientPromise from "@/lib/mongo";
import { ObjectId } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await clientPromise;
  const db = client.db("daisy-pc");
  const product = await db
    .collection("products")
    .findOne({ _id: new ObjectId(req.query.id as string) });

  res.status(200).json({ product });
}
