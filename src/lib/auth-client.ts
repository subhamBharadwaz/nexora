import { createAuthClient } from "better-auth/react";
import { stripeClient } from "@better-auth/stripe/client";

import { env } from "@/env";

export const authClient = createAuthClient({
  baseURL: env.NEXT_PUBLIC_APP_URL,
  plugins: [
    stripeClient({
      subscription: true,
    }),
  ],
});
export const { signIn, signUp, useSession, signOut } = createAuthClient();
