import { createAuthClient } from "better-auth/react"; // make sure to import from better-auth/react

import { env } from "@/env";

export const authClient = createAuthClient({
  baseURL: env.NEXT_PUBLIC_APP_URL,
});
export const { signIn, signUp, useSession, signOut } = createAuthClient();
