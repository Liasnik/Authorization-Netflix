// import { NextRequest, NextResponse } from "next/server";
// import bcrypt from "bcrypt";
// import prisma from "@/app/utils/prismadb";

// export async function POST(request: NextRequest) {
//   try {
//     const body = await request.json();
//     const { email, name, image, password } = body;

//     console.log("Received registration request:", body); // Вывести данные запроса в консоль

//     if (!email || !name || !password) {
//       return NextResponse.error();
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = image
//       ? {
//           name,
//           email,
//           image,
//           hashedPassword,
//           emailVerified: new Date(),
//         }
//       : {
//           name,
//           email,
//           hashedPassword,
//           emailVerified: new Date(),
//         };

//     const user = await prisma.user.create({ data: { ...newUser } }); // створюємо юзера

//     console.log("Received registration request:", request.body); // Вывести данные запроса в консоль

//     return NextResponse.json(user);
//   } catch (error) {
//     console.error("Error in registration:", error);
//     return NextResponse.error();
//   }
// }

import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import client from "@/app/utils/prismadb";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, password, image } = body;

    if (!email || !name || !password) {
      return NextResponse.error();
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await client.user.create({
      data: {
        name,
        email,
        image,
        hashedPassword,
        emailVerified: new Date(),
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.error();
  }
}
