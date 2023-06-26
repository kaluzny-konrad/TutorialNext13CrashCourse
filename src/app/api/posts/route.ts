import { authOptions } from "@/nextAuth/options";
import { getServerSession } from "next-auth";
import { NextResponse, NextRequest } from "next/server";
import prismaClient from "@/prisma/client";

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session?.user?.email)
      return new NextResponse("Sign in to make a post", { status: 401 });

    const prismaUser = await prismaClient.user.findUnique({
      where: { email: session?.user?.email! },
    });
    const authorId = prismaUser?.id as string;

    const title = (await request.json()) as string;

    if (!title || !title.length) return new NextResponse("Title is required", { status: 403 });

    if (title.length > 300)
      return new NextResponse("Title is too long", { status: 403 });

    try {
      const result = await prismaClient.post.create({
        data: {
          title,
          authorId,
        },
      });
      return new NextResponse(JSON.stringify(result), { status: 201 });
    } catch (error: any) {
      return new NextResponse(
        JSON.stringify({ err: "Error has occured when making a post" }),
        { status: 403 }
      );
    }
  } catch (error: any) {
    return new NextResponse(JSON.stringify({ err: error.message }), {
      status: 403,
    });
  }
}
