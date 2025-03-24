import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/server/db";
import { env } from "@/env";
import {
  users,
  accounts,
  sessions,
  verifications,
  subscriptions,
} from "@/server/db/schema";
import { stripe } from "@better-auth/stripe";
import { stripe as stripeClient } from "./stripe";
import { headers } from "next/headers";

export const auth = betterAuth({
  baseURL: env.NEXT_PUBLIC_APP_URL,
  secret: env.BETTER_AUTH_SECRET,
  socialProviders: {
    google: {
      enabled: true,
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    },
    github: {
      enabled: true,
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    },
  },
  plugins: [
    stripe({
      stripeClient,
      stripeWebhookSecret: env.STRIPE_WEBHOOK_SECRET,
      createCustomerOnSignUp: true,
      subscription: {
        enabled: true,
        plans: [
          {
            name: "pro",
            priceId: env.STRIPE_PRO_MONTHLY_PRICE_ID,
          },
        ],
      },
    }),
  ],
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      user: users,
      account: accounts,
      session: sessions,
      verification: verifications,
      subscription: subscriptions,
    },
  }),
});

export async function getActiveSubscription() {
  const nextHeaders = await headers();
  const subscriptions = await auth.api.listActiveSubscriptions({
    headers: nextHeaders,
  });
  return subscriptions.find((s) => s.status === "active");
}
