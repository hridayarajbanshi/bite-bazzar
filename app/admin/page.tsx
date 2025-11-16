import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";
import { connectToDB } from "@/lib/mongoDB";
import Product from "@/models/product";
import User from "@/models/user";
import AdminSidebar from "@/components/AdminSideBar";
import AdminChart from "@/components/AdminChart";

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
  const totalUsers = await User.countDocuments();

  return (

   
    <div className="flex flex-row  ">
 <AdminSidebar />
 <div className="space-y-10 flex-1 p-8 bg-gray-50 min-h-screen">
      {/* Stats Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500">Total Products</p>
          <h2 className="text-3xl font-bold text-green-600 mt-2">{totalProducts}</h2>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500">Total Users</p>
          <h2 className="text-3xl font-bold text-green-600 mt-2">{totalUsers}</h2>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500">Total Orders</p>
          <h2 className="text-3xl font-bold text-green-600 mt-2">132</h2>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500">Revenue</p>
          <h2 className="text-3xl font-bold text-green-600 mt-2">$12,480</h2>
        </div>
      </div>

      <div className="p-8 w-full">
        <AdminChart data={["laptop", 
"smartphone", "tablet", "accessories"
        ]} />
      </div>
    </div>
    </div>
  );
}
