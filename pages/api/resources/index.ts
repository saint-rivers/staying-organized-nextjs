import {
  NextApiRequest,
  NextApiResponse,
} from "../../../node_modules/next/dist/shared/lib/utils";
import { prisma } from "../../../prisma/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "GET":
      const resources = await prisma.resources.findMany();
      console.log(resources);

      res.status(200).json({ resources });

    case "POST":
      const body = req.body;
      const resource =
        (await prisma.resources.findUnique({
          where: {
            link: body.link,
          },
        })) || null;

      if (resource !== null) {
        res.status(400).send({
          message: "Resource already exists",
          payload: {
            id: resource.id,
            status: "exists",
          },
        });
        return;
      }

      const result = await prisma.resources.create({
        data: {
          displayName: body.displayName,
          link: body.link,
        },
      });
      res.status(200).json({ payload: result });
  }
}
