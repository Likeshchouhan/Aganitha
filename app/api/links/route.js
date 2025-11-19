import { connectDB } from "@/lib/db";
import Link from "@/models/Link";


export async function GET() {
await connectDB();
const links = await Link.find().sort({ createdAt: -1 });
return Response.json(links);
}


export async function POST(req) {
await connectDB();
const { url, code } = await req.json();


const finalCode = code || Math.random().toString(36).substring(2, 8);


const exists = await Link.findOne({ code: finalCode });
if (exists) return new Response("Conflict", { status: 409 });


const link = await Link.create({ code: finalCode, url });
return Response.json(link);
}