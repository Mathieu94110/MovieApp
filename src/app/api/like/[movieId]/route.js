import prisma from "@/utils/prisma";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function POST(request, context) {
    const { movieId } = context.params;

    const token = await getToken({ req: request });

    if (!token) {
        return NextResponse.json({ message: "unauthorized" }, { status: 401 });
    }

    const user = await prisma.user.update({
        where: { email: token.email },
        data: {
            movieLikes: {
                create: [{ movieId: String(movieId) }],
            },
        },
    });

    return NextResponse.json(user);
}