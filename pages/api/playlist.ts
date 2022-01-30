import prisma from "../../lib/prisma";
import { validateRoute } from "../../lib/auth";

export default validateRoute(async (req, res, user) => {
  const playlist = await prisma.playList.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      name: "asc",
    },
  });
  res.json(playlist);
});
