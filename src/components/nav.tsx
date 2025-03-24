"use client";
import * as React from "react";

import { Hexagon, LogIn, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggler } from "@/components/theme-toggler";
import { signOut } from "@/lib/auth-client";
import { UserSession } from "@/types";

type NavbarProps = {
  user: UserSession | null;
};

const Navbar: React.FC<NavbarProps> = ({ user }) => {
  return (
    <nav className="py-6 px-6 flex items-center justify-between">
      <div className="flex items-center gap-x-2 animate-fade-in">
        <Hexagon className="size-6" />
        <span className="inline-block text-2xl font-bold">nexora</span>
      </div>

      <div className="flex items-center space-x-2 animate-fade-in [animation-delay:200ms]">
        <Button
          variant="outline"
          size="sm"
          className="gap-2"
          onClick={async () => {
            if (user) {
              await signOut();
            } else {
              return null;
            }
          }}
        >
          {user ? (
            <>
              Sign Out <LogOut size={16} />
            </>
          ) : (
            <>
              Sign In <LogIn size={16} />
            </>
          )}
        </Button>

        <ThemeToggler />
      </div>
    </nav>
  );
};

export default Navbar;
