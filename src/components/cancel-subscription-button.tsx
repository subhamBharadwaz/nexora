"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "./ui/button";
import { UserSession } from "@/types";

export const CancelSubscriptionButton = ({
  user,
}: {
  user: UserSession | null;
}) => {
  return (
    <Button
      className="cursor-pointer"
      variant="destructive"
      size="lg"
      onClick={async () => {
        try {
          if (user) {
            await authClient.subscription.cancel({
              returnUrl: "/",
            });
          } else {
            return null;
          }
        } catch (error) {
          console.error(error);
        }
      }}
    >
      Cancel Subscription
    </Button>
  );
};
