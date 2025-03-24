"use server";

import { getActiveSubscription } from "@/lib/auth";
import { checkUser } from "./user";

export async function getUserSubscription() {
  const user = await checkUser();
  if (!user) return { subscription: null };
  const subscription = await getActiveSubscription();
  return subscription ? { subscription } : { subscription: null };
}
