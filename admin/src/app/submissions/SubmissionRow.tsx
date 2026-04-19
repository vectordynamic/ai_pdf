"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

export default function SubmissionRow({ submission }: { submission: any }) {
  const [status, setStatus] = useState(submission.status);
  const [loading, setLoading] = useState(false);

  const handleVerify = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/submissions/${submission._id}`, {
        method: "PATCH",
      });
      if (res.ok) {
        setStatus("Verified");
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <tr className="border-b border-zinc-800 hover:bg-zinc-800/50 transition-colors">
      <td className="p-4 font-mono text-sm text-zinc-300">{submission.transactionId}</td>
      <td className="p-4 font-medium text-sm text-zinc-300">{submission.paymentMethod}</td>
      <td className="p-4 font-medium text-zinc-300">{submission.mobile}</td>
      <td className="p-4 font-medium text-zinc-300">{submission.email}</td>
      <td className="p-4 text-sm text-zinc-500" suppressHydrationWarning>
        {new Date(submission.createdAt).toLocaleString()}
      </td>
      <td className="p-4">
        {status === "Verified" ? (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 text-xs font-bold ring-1 ring-emerald-500/20">
            <CheckCircle className="w-3.5 h-3.5" /> Verified
          </span>
        ) : (
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-950 text-amber-400 text-xs font-bold ring-1 ring-amber-500/20">
            Pending
          </span>
        )}
      </td>
      <td className="p-4 text-right">
        {status === "Pending" && (
          <button
            onClick={handleVerify}
            disabled={loading}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-lg disabled:opacity-50 transition-colors cursor-pointer"
          >
            {loading ? "Verifying..." : "Mark Verified"}
          </button>
        )}
      </td>
    </tr>
  );
}
