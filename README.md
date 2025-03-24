# Nexora - Ultimate Next.js Boilerplate

A production-ready Next.js boilerplate with App Router, Drizzle ORM, Supabase, Better-Auth, and Stripe integration. Built for developers who want to focus on building features, not configuring tools.

![Nexora Banner](https://github.com/user-attachments/assets/99301b08-e7f4-4bf7-84df-4daef5119157)

## Features

- 🚀 **Next.js App Router** - Leverage the latest routing system
- 🔐 **Authentication** - Social logins with Better-Auth
- 💾 **Database** - Type-safe Drizzle ORM with Supabase backend
- 💰 **Payments** - Stripe integration for subscriptions and one-time payments
- 🧹 **Code Quality** - Biome for linting and formatting
- 🎨 **UI Components** - shadcn/ui for beautiful, accessible components
- 🌓 **Dark Mode** - Built-in theme toggling
- 🔍 **SEO Optimized** - Pre-configured for search engines

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- bun
- Supabase account
- Stripe account (for payment features)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/subhamBharadwaz/nexora.git
cd nexora
```

### Instal Dependencies

```bash
bun install
```

### Set up environment variables

```bash
cp .env.example .env
```

### Applying changes to DB

```bash
bunx drizzle-kit generate
```

### Run DB migrations

```bash
bunx drizzle-kit migrate
```

### Start the development server

```bash
bun dev
```

Open <http://localhost:3000> in your browser.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/subhamBharadwaz/nexora/blob/main/LICENSE.md) file for details.
