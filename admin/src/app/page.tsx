import { connectToDatabase } from "@/lib/mongodb";
import Submission from "@/models/Submission";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  await connectToDatabase();
  const total = await Submission.countDocuments();
  const verified = await Submission.countDocuments({ status: "Verified" });
  const pending = await Submission.countDocuments({ status: "Pending" });

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white">Dashboard Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 shadow-sm">
          <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-2">Total Submissions</h3>
          <p className="text-4xl font-extrabold text-white">{total}</p>
        </div>
        
        <div className="bg-zinc-900 p-6 rounded-2xl border border-emerald-900/30 shadow-sm">
          <h3 className="text-sm font-bold text-emerald-500 uppercase tracking-wider mb-2">Verified & Emailed</h3>
          <p className="text-4xl font-extrabold text-emerald-400">{verified}</p>
        </div>
        
        <div className="bg-zinc-900 p-6 rounded-2xl border border-amber-900/30 shadow-sm">
          <h3 className="text-sm font-bold text-amber-500 uppercase tracking-wider mb-2">Pending Action</h3>
          <p className="text-4xl font-extrabold text-amber-400">{pending}</p>
        </div>
      </div>
    </div>
  );
}
