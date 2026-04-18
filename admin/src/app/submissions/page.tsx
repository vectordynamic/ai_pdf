import { connectToDatabase } from "@/lib/mongodb";
import Submission from "@/models/Submission";
import SubmissionRow from "./SubmissionRow";

export const dynamic = "force-dynamic";

export default async function SubmissionsPage() {
  await connectToDatabase();
  
  // Get all submissions ordered by newest first
  const submissions = await Submission.find({}).sort({ createdAt: -1 }).lean();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white">Submissions</h2>
      </div>

      <div className="bg-zinc-900 rounded-2xl border border-zinc-800 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-zinc-950 border-b border-zinc-800">
                <th className="p-4 text-sm font-bold text-zinc-400">Transaction ID</th>
                <th className="p-4 text-sm font-bold text-zinc-400">Method</th>
                <th className="p-4 text-sm font-bold text-zinc-400">Mobile</th>
                <th className="p-4 text-sm font-bold text-zinc-400">Submitted At</th>
                <th className="p-4 text-sm font-bold text-zinc-400">Status</th>
                <th className="p-4 text-sm font-bold text-zinc-400 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {submissions.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-zinc-500">
                    No submissions yet.
                  </td>
                </tr>
              ) : (
                submissions.map((sub: any) => (
                  <SubmissionRow key={sub._id.toString()} submission={JSON.parse(JSON.stringify(sub))} />
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
