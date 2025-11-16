import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";
import { connectToDB } from "@/lib/mongoDB";
import Order from "@/models/order";
import AdminSidebar from "@/components/AdminSideBar";

export default async function AdminOrdersPage() {
  const session = await getServerSession(authOptions as any);
  if (!session) return redirect("/login");
  if (session.user.role !== "admin") return redirect("/");
  await connectToDB();

  const orders = await Order.find()
    .populate("user", "fullName email")
    .sort({ createdAt: -1 });

  const badgeStyles: any = {
    pending: "bg-yellow-100 text-yellow-700",
    paid: "bg-green-100 text-green-700",
    shipped: "bg-blue-100 text-blue-700",
    delivered: "bg-purple-100 text-purple-700",
    cancelled: "bg-red-100 text-red-700",
  };

  return (
    <div className="flex min-h-screen bg-gray-100 ">
      <AdminSidebar/>
   

      <main className="flex-1 p-8">
           <h1 className="text-3xl font-bold mb-6 text-gray-800">Orders</h1>
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600 border-b">
            <tr>
              <th className="p-4">Order ID</th>
              <th className="p-4">Customer</th>
              <th className="p-4">Total</th>
              <th className="p-4">Status</th>
              <th className="p-4">Date</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order: any) => (
              <tr key={order._id} className="border-b hover:bg-gray-50">
                <td className="p-4">{order._id}</td>
                <td className="p-4">
                  {order.user?.fullName}
                  <br />
                  <small className="text-gray-500">{order.user?.email}</small>
                </td>
                <td className="p-4 font-semibold">${order.total}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      badgeStyles[order.status]
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="p-4">
                  {new Date(order.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
