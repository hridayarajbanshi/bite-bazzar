import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";
import React from "react";
import AdminSidebar from "@/components/AdminSideBar"
import { connectToDB } from "@/lib/mongoDB";
import Product from "@/models/product";
import Link from "next/link";
import { Pencil, Trash2, PlusCircle } from "lucide-react";

const Page = async () => {
  // ✅ PROTECT ADMIN PAGE
  const session = await getServerSession(authOptions as any);
  if (!session) return redirect("/login");
  if ((session.user as any).role !== "admin") return redirect("/");

  // ✅ Fetch products
  await connectToDB();
  const products = await Product.find().sort({ createdAt: -1 });

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Products</h1>

          <Link
            href="/admin/products/new"
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            <PlusCircle size={18} /> Add Product
          </Link>
        </div>

        {/* TABLE */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b text-gray-600">
                <th className="p-4 text-left">Image</th>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Category</th>
                <th className="p-4 text-left">Price</th>
                <th className="p-4 text-left">Inventory</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {products.map((p: any) => (
                <tr key={p._id} className="border-b hover:bg-gray-50">
                  <td className="p-4">
                    <img
                      src={p.images?.[0] || "/placeholder.png"}
                      alt=""
                      className="w-14 h-14 rounded-md object-cover"
                    />
                  </td>
                  <td className="p-4 font-medium">{p.name}</td>
                  <td className="p-4 capitalize">{p.category}</td>
                  <td className="p-4">${p.price}</td>
                  <td className="p-4">{p.inventory}</td>
                  <td className="p-4 text-right space-x-3">
                    <Link
                      href={`/admin/products/edit/${p._id}`}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <Pencil size={18} />
                    </Link>

                    <button
                      onClick={() => console.log("Delete product", p._id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}

              {products.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center py-10 text-gray-500">
                    No products found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Page;
