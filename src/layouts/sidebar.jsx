import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { MessageSquare, Search } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import { navItems } from "../App";

const Layout = () => {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[300px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

const Sidebar = () => (
  <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-[60px] items-center border-b px-6">
        <NavLink to="/" className="flex items-center gap-2 font-semibold">
          <MessageSquare className="h-6 w-6" />
          <span>WhatsApp Clone</span>
        </NavLink>
      </div>
      <div className="flex-1 flex flex-col gap-4 p-4">
        <div className="flex items-center gap-2">
          <Input
            type="search"
            placeholder="Search chats..."
            className="h-9"
          />
          <Button size="icon" variant="ghost">
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
        </div>
        <nav className="grid items-start gap-2">
          {navItems.map((item) => (
            <NavItem key={item.to} item={item} />
          ))}
        </nav>
        <ScrollArea className="flex-1">
          <div className="grid gap-2 p-2">
            {/* Placeholder for chat list */}
            {[...Array(20)].map((_, i) => (
              <ChatItem key={i} />
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  </div>
);

const NavItem = ({ item }) => (
  <NavLink
    to={item.to}
    className={({ isActive }) =>
      cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
        isActive ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50" : "hover:bg-gray-100 dark:hover:bg-gray-800"
      )
    }
  >
    {item.icon}
    {item.title}
  </NavLink>
);

const ChatItem = () => (
  <div className="flex items-center gap-4 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
    <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700" />
    <div className="flex-1 overflow-hidden">
      <div className="font-medium">User Name</div>
      <div className="text-sm text-gray-500 dark:text-gray-400 truncate">
        Last message preview...
      </div>
    </div>
  </div>
);

export default Layout;