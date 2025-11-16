"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, Package, ShoppingCart, Users, LogOut } from "lucide-react";

const menuItems = [
  { name: "Dashboard", href: "/admin", icon: <BarChart3 size={18} /> },
  { name: "Products", href: "/admin/products", icon: <Package size={18} /> },
  { name: "Orders", href: "/admin/orders", icon: <ShoppingCart size={18} /> },
  { name: "Users", href: "/admin/users", icon: <Users size={18} /> },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-50 h-auto bg-white border-r border-gray-200 shadow-sm hidden md:flex flex-col">
      <nav className="flex-1 flex flex-col p-3 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              pathname === item.href
                ? "bg-green-500 text-blue-50"
                : "text-slate-700 hover:bg-gray-100"
            }`}
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </nav>
      <button className="m-3 flex items-center gap-2 text-red-500 hover:bg-red-50 rounded-lg px-4 py-2 transition-colors">
        <LogOut size={18} /> Logout
      </button>
    </aside>
  );
}
