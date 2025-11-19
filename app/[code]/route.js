// Redirect route placeholder
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Link from "@/models/Link";

export async function GET(_, { params }) {
  await connectDB();

  const link = await Link.findOne({ code: params.code });

  if (!link) return NextResponse.json({ error: "Not found" }, { status: 404 });

  // update click count
  link.clicks += 1;
  link.lastClicked = new Date();
  await link.save();

  return NextResponse.redirect(link.url); // 302
}
