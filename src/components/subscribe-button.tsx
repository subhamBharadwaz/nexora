"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "./ui/button";
import { UserSession } from "@/types";
import { useRouter } from "next/navigation";

export const SubscribeButton = ({ user }: { user: UserSession | null }) => {
  const router = useRouter();
  return (
    <Button
      className="cursor-pointer"
      variant="secondary"
      size="lg"
      onClick={async () => {
        try {
          if (user) {
            await authClient.subscription.upgrade({
              plan: "pro",
              successUrl: "/",
              cancelUrl: "/",
            });
          } else {
            router.push("/sign-in");
          }
        } catch (error) {
          console.error(error);
        }
      }}
    >
      Subscribe
    </Button>
  );
};
