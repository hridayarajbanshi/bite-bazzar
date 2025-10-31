import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";
import { connectToDB } from "@/lib/mongoDB";
import Product from "@/models/product";

export const revalidate = 0; 
export default async function AdminPage() {
  const session = await getServerSession(authOptions as any);

  if (!session) {
    // Redirect to login if not authenticated
    return redirect("/login");
  }
  if ((session.user as any).role !== "admin") {
    // Return simple access denied UI (server rendered) — you could also redirect
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold">Access denied</h1>
        <p className="mt-2">You need admin privileges to view this page.</p>
      </div>
    );
  }

 
  await connectToDB();
  const totalProducts = await Product.countDocuments();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <div>Total products: {totalProducts}</div>
      
    </div>
  );
}
