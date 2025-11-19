import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Link from "@/models/Link";

export async function GET(_, { params }) {
  await connectDB();

  const link = await Link.findOne({ code: params.code });

  if (!link) return NextResponse.json({ error: "Not found" }, { status: 404 });

  return NextResponse.json(link);
}

export async function DELETE(_, { params }) {
  await connectDB();

  await Link.deleteOne({ code: params.code });

  return NextResponse.json({ ok: true });
}
