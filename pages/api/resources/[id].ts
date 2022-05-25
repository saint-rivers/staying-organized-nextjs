import {
  NextApiRequest,
  NextApiResponse,
} from "../../../node_modules/next/dist/shared/lib/utils";
import { prisma } from "../../../prisma/db";
import { useRouter } from "next/router";

export const deleteResource = async (id: string) => {
  const response = await prisma.resources.delete({ where: { id: id } });
  console.log(response);
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  // const { query } = useRouter();
  switch (method) {
    case "DELETE":
      // todo: get id from request URL
      // const response = await prisma.resources.delete({ where: { id: id } });
      res.status(200).json({ message: "done" });
  }
}
