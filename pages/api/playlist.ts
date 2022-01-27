import prisma from "../../lib/prisma";
import { validateRoute } from "../../lib/auth";

export default validateRoute(async (req, res, user) => {
  const playlist = await prisma.playList.findMany({
    where: {
      userId: user.id,
    },
  });
  res.json(playlist);
});