import getSession from "@/actions/getSession";
import getUsers from "@/actions/getUsers";
import client from "@/libs/Prismadb";
import { User } from "@prisma/client";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export const GET = async () => {
  const users = await getUsers();
  return new NextResponse(JSON.stringify(users), { status: 200 });
};
