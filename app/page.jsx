"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [links, setLinks] = useState([]);
  const [url, setUrl] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchLinks() {
    const res = await fetch("/api/links");
    const data = await res.json();
    setLinks(data);
  }

  useEffect(() => {
    fetchLinks();
  }, []);

  async function addLink(e) {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/links", {
      method: "POST",
      body: JSON.stringify({ url, code }),
    });

    setLoading(false);

    if (res.status === 409) {
      alert("Code already exists");
      return;
    }

    await fetchLinks();
    setUrl("");
    setCode("");
  }

  async function deleteLink(code) {
    await fetch(`/api/links/${code}`, { method: "DELETE" });
    fetchLinks();
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">TinyLink Dashboard</h1>

      <form onSubmit={addLink} className="mb-6 space-y-3">
        <input
          type="text"
          placeholder="Enter long URL"
          className="w-full p-2 border rounded"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Custom code (optional)"
          className="w-full p-2 border rounded"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        <button
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {loading ? "Creating..." : "Create Link"}
        </button>
      </form>

      <table className="w-full bg-white shadow rounded">
        <thead>
          <tr className="border-b">
            <th className="p-2 text-left">Code</th>
            <th className="p-2 text-left">URL</th>
            <th className="p-2 text-left">Clicks</th>
            <th className="p-2 text-left">Last Clicked</th>
            <th className="p-2 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {links.map((l) => (
            <tr key={l.code} className="border-b">
              <td className="p-2">{l.code}</td>
              <td className="p-2 truncate max-w-xs">{l.url}</td>
              <td className="p-2">{l.clicks}</td>
              <td className="p-2">
                {l.lastClicked ? new Date(l.lastClicked).toLocaleString() : "—"}
              </td>
              <td className="p-2">
                <button className="text-red-500" onClick={() => deleteLink(l.code)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
