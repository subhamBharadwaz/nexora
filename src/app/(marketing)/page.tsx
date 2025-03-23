import { Code, Database, LockKeyhole, CreditCard } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Navbar from "@/components/nav";
import { cn } from "@/lib/utils";

export default async function Home() {
  const user = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      {/* Navbar */}
      <div className="max-w-7xl mx-auto">
        <Navbar user={user} />
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance mb-6 animate-fade-in">
            The Ultimate Next.js Boilerplate
          </h1>

          <p className="text-xl text-muted-foreground mb-10 animate-fade-in [animation-delay:200ms]">
            Start your project with a powerful stack featuring Next.js App
            Router, Drizzle with Supabase, Better-Auth, Biome, and Stripe
            integration.
          </p>

          <div className="animate-fade-in [animation-delay:400ms]">
            <a
              href="/https://github.com/subhamBharadwaz/nexora"
              className={cn(buttonVariants({ size: "lg" }))}
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
          <div className="bg-card rounded-xl p-6 border shadow-sm animate-fade-in [animation-delay:100ms]">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Code className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Next.js App Router</h3>
            <p className="text-muted-foreground">
              Built with the latest Next.js features for optimal performance and
              SEO.
            </p>
          </div>

          <div className="bg-card rounded-xl p-6 border shadow-sm animate-fade-in [animation-delay:200ms]">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Database className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Drizzle + Supabase</h3>
            <p className="text-muted-foreground">
              Type-safe database operations with Drizzle ORM and Supabase
              backend.
            </p>
          </div>

          <div className="bg-card rounded-xl p-6 border shadow-sm animate-fade-in [animation-delay:300ms]">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <LockKeyhole className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Better-Auth</h3>
            <p className="text-muted-foreground">
              Secure authentication system that&apos;s easy to implement and
              customize.
            </p>
          </div>

          <div className="bg-card rounded-xl p-6 border shadow-sm animate-fade-in [animation-delay:400ms]">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <CreditCard className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Stripe Integration</h3>
            <p className="text-muted-foreground">
              Ready-to-use payment processing for your SaaS or e-commerce
              project.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center animate-fade-in [animation-delay:500ms]">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get started with nexora today and focus on building your product,
              not your infrastructure.
            </p>
            <a
              href="/https://github.com/subhamBharadwaz/nexora"
              className={cn(buttonVariants({ size: "lg" }), "px-8")}
            >
              Start Building Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
