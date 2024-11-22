"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Users,
  ShoppingBag,
  Repeat,
  Bell,
  CreditCard,
} from "lucide-react";

interface Props {
  fullName: string;
  avatar: string;
  email: string;
}

const navItems = [
  { name: "Overview", url: "/", icon: Home },
  { name: "Users", url: "/users", icon: Users },
  { name: "Transactions", url: "/transactions", icon: CreditCard },
  { name: "Orders", url: "/orders", icon: ShoppingBag },
  { name: "Disputes", url: "/disputes", icon: Repeat },
  { name: "Notifications", url: "/notifications", icon: Bell },
];

const Sidebar = ({ fullName, avatar, email }: Props) => {
  const pathname = usePathname();

  return (
    <aside className="flex flex-col w-64 bg-white shadow-lg h-screen px-6 py-4">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 mb-6">
        <img
          src="/vendyz.png"
          alt="logo"
          className="hidden lg:block h-10 w-auto"
        />
        <img src="/vendyz.png" alt="logo" className="lg:hidden h-8 w-auto" />
      </Link>

      {/* Navigation */}
      <nav>
        <ul className="flex flex-col gap-4">
          {navItems.map(({ name, url, icon: Icon }) => (
            <li key={name}>
              <Link
                href={url}
                className={`flex items-center gap-3 p-2 rounded-md transition-colors ${
                  pathname === url ? "text-[#227eff]" : "text-gray-600"
                }`}
              >
                <Icon
                  className={`w-6 h-6 ${
                    pathname === url ? "text-[#227eff]" : "text-gray-600"
                  }`}
                />
                <span
                  className={`text-sm font-medium hidden lg:block ${
                    pathname === url ? "text-[#227eff]" : "text-gray-600"
                  }`}
                >
                  {name}
                </span>
                {name === "Notifications" && (
                  <div className="absolute right-2 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* User Info */}
      <div className="mt-auto flex items-center gap-3">
        <img
          src={avatar}
          alt="Avatar"
          className="w-11 h-11 rounded-full object-cover"
        />
        <div className="hidden lg:block">
          <p className="font-semibold capitalize">{fullName}</p>
          <p className="text-xs text-gray-500">{email}</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
