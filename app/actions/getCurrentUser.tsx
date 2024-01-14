import { getServerSession } from "next-auth/next";
import prisma from "@/app/utils/prismadb";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const getSession = async () => {
  return await getServerSession(authOptions); // отримуем дані поточної сесії
};

const getCurrentUser = async () => {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }

    console.log("Session user email:", session.user.email); // Вывести email из сессии

    const currentUser = await prisma.user.findUnique({
      // шукаєм через email з поточної session унікального юзера, через client який створили за допомогою PrismaClient
      where: {
        email: session.user.email,
      },
    });

    if (!currentUser) {
      return null;
    }

    // return currentUser.name

    console.log("Current user:", currentUser); // Вывести данные текущего пользователя
    console.log("Current image:", currentUser.image);

    return {
      ...currentUser,
      createdAt: currentUser.createdAt.toISOString(), // це все потрібно прописати щоб не сварилась чи база даних (чи прізма, точно невідомо поки)
      updatedAt: currentUser.updatedAt.toISOString(), // Без цього працює але чомусь вивадить дані ці в терміналі рожеви...  через console.log прописаний в Home
      emailVerified: currentUser?.emailVerified?.toISOString() || null,
    };
  } catch (error: any) {
    throw new Error(error);
  }
};

export default getCurrentUser;
