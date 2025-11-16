import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";
import { connectToDB } from "@/lib/mongoDB";
import User from "@/models/user";
import { Shield, ShieldOff, Trash2 } from "lucide-react";
import AdminSidebar from "@/components/AdminSideBar";

export default async function AdminUsersPage() {
  // ✅ Protect Admin Page
  const session = await getServerSession(authOptions as any);
  if (!session) return redirect("/login");
  if (session.user.role !== "admin") return redirect("/");

  // ✅ Fetch all users
  await connectToDB();
  const users = await User.find().sort({ createdAt: -1 });

  return (
    <div className="flex min-h-screen bg-gray-100 ">
      <AdminSidebar />
      
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-800">Users</h1>
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600 border-b">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Role</th>
              <th className="p-4">Joined</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user: any) => (
              <tr key={user._id} className="border-b hover:bg-gray-50">
                <td className="p-4 font-medium">{user.fullName}</td>
                <td className="p-4">{user.email}</td>
                <td className="p-4 capitalize">{user.role}</td>
                <td className="p-4">
                  {new Date(user.createdAt).toLocaleDateString()}
                </td>

                <td className="p-4 text-right flex items-center gap-3 justify-end">

                  {/* ✅ Promote */}
                  {user.role !== "admin" && (
                    <form
                      action={`/api/admin/users/promote/${user._id}`}
                      method="POST"
                    >
                      <button className="text-green-600 hover:text-green-800 flex items-center gap-1">
                        <Shield size={16} /> Promote
                      </button>
                    </form>
                  )}

                  {/* ✅ Demote */}
                  {user.role === "admin" && (
                    <form
                      action={`/api/admin/users/demote/${user._id}`}
                      method="POST"
                    >
                      <button className="text-yellow-600 hover:text-yellow-800 flex items-center gap-1">
                        <ShieldOff size={16} /> Demote
                      </button>
                    </form>
                  )}

                  {/* ✅ DELETE */}
                  <form
                    action={`/api/admin/users/delete/${user._id}`}
                    method="POST"
                  >
                    <button
                      className="text-red-500 hover:text-red-700 flex items-center gap-1"
                    >
                      <Trash2 size={16} /> Delete
                    </button>
                  </form>

                </td>
              </tr>
            ))}

            {users.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="text-center py-10 text-gray-500"
                >
                  No users found.
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>
    </div>
  );
}
