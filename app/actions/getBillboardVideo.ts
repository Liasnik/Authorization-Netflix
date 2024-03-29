import prisma from "../utils/prismadb";

const getBillboardVideo = async () => {
  try {
    const moviesCount = await prisma.movie.count();

    const randomIndex = Math.floor(Math.random() * moviesCount);

    const randomMovies = await prisma.movie.findMany({
      take: 1,
      skip: randomIndex,
    });

    return randomMovies[0];
  } catch (error: any) {
    throw new Error(error);
  }
};

export default getBillboardVideo;
