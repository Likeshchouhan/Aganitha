// Stats page placeholder
import { connectDB } from "@/lib/db";
import Link from "@/models/Link";


export default async function StatsPage({ params }) {
await connectDB();
const data = await Link.findOne({ code: params.code });


if (!data) return <h1 className="text-xl">Not found</h1>;


return (
<div>
<h1 className="text-2xl font-bold mb-4">Stats for {data.code}</h1>
<p><strong>Target URL:</strong> {data.url}</p>
<p><strong>Total Clicks:</strong> {data.clicks}</p>
<p><strong>Last Clicked:</strong> {data.lastClicked?.toString() || "—"}</p>
</div>
);
}