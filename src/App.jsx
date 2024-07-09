import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MessageSquare, Users, Phone, Settings, LogOut } from "lucide-react";
import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import Layout from "./layouts/sidebar";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import { useSupabase } from "./integrations/supabase";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Chats",
    to: "/",
    icon: <MessageSquare className="h-4 w-4" />,
  },
  {
    title: "Contacts",
    to: "/contacts",
    icon: <Users className="h-4 w-4" />,
  },
  {
    title: "Calls",
    to: "/calls",
    icon: <Phone className="h-4 w-4" />,
  },
  {
    title: "Settings",
    to: "/settings",
    icon: <Settings className="h-4 w-4" />,
  },
];

const App = () => {
  const { user, signOut } = useSupabase();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route
              path="/login"
              element={user ? <Navigate to="/" replace /> : <Login />}
            />
            <Route
              path="/signup"
              element={user ? <Navigate to="/" replace /> : <Signup />}
            />
            <Route
              path="/"
              element={
                user ? (
                  <Layout>
                    <button onClick={handleSignOut} className="flex items-center gap-2 text-red-500 hover:text-red-600">
                      <LogOut className="h-4 w-4" />
                      Sign Out
                    </button>
                  </Layout>
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            >
              <Route index element={<Index />} />
              {/* Add more protected routes here */}
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;