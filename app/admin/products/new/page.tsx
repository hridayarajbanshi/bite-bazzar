import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";
import AdminSidebar from "@/components/AdminSideBar";
import NewProductForm from "@/components/NewProductForm";

export default async function NewProductPage() {
  const session = await getServerSession(authOptions as any);

  if (!session) return redirect("/login");
  if (session.user.role !== "admin") return redirect("/");

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-1 p-8 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Create New Product</h1>
       <NewProductForm />
      </div>
    </div>
  );
}
