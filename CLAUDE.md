# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project context

Public-facing marketing site for Foreware Technologies (Lagos, Nigeria). This is the **client** tier in a three-app system — it consumes the Express backend in `../foreware-api` and is administered from `../foreware-insights-hub`. Pages are SEO-targeted (LocalBusiness JSON-LD in `app/layout.tsx`) and content (blog posts, popup forms, tracking codes) is fetched live from the API.

## Commands

```bash
npm run dev      # next dev (default :3000)
npm run build    # next build
npm run start    # next start (prod)
npm run lint     # eslint (uses eslint-config-next)
```

No test setup exists in this app.

## Required env vars

- `FOREWARE_API_URL` — used by **server components / route handlers** (e.g. `app/layout.tsx`, `app/lib/api.ts`). No `/api` suffix; the routes already include it.
- `NEXT_PUBLIC_FOREWARE_API_URL` — used by the **browser-side axios client** (`app/lib/apiClient.ts`).

Both must be set even though they usually point to the same origin: server-side fetches use one, client-side uses the other.

## Architecture

**Stack:** Next.js 16 (App Router), React 19, TypeScript (strict), Tailwind CSS v4 (`@tailwindcss/postcss`), TanStack Query, axios, React Hook Form + Zod 4, Sonner, Framer Motion.

**Path alias:** `@/*` resolves to the project root (`./*`), not `./src`. Imports look like `@/app/components/...` and `@/public/images/...`.

**Two API access patterns — pick the right one:**

1. **Server Components** (default for pages): use plain `fetch` against `process.env.FOREWARE_API_URL`. See `app/lib/api.ts` for `getPublishedPosts` / `getSinglePost`. These render at request time (`cache: "no-store"`) or use `next: { tags: [...] }` for revalidation. Pass results as `initialData` into TanStack Query on the client.
2. **Client Components**: use the typed resource factory in `app/lib/apiClient.ts`. `createResourceApi<T>(resource)` returns `{ getAll, getOne, create, update, delete }` backed by axios. Per-resource hooks live in `app/hooks/<resource>/` and follow a consistent split: `<name>Service.ts` (factory + types), `<name>Queries.ts` (TanStack `queryOptions`), and `use<Name>.ts` / `use<Name>s.ts` (hooks).

**Layout & dynamic head injection:** `app/layout.tsx` fetches tracking codes from the API at request time and renders them via `dangerouslySetInnerHTML` into `<head>` (placement=`header`) and end of `<body>` (placement=`body`). The `</script>...<script>` wrapping is intentional — it lets raw third-party tags (Google Tag Manager, Meta Pixel, etc., which contain `<script>` tags themselves) survive React's escaping. Don't "clean this up."

**Marketing routes:** Each top-level marketing page is its own folder under `app/` (`about/`, `careers/`, `contact/`, `custom-software-solution/`, `data-analytics-ai-solution/`, `enterprise-business-solution/`, `it-support-sonsulting-training/` (note the typo — preserved in URLs), `system-integration-api-dev/`, `partners/`, `privacy-policy/`, `terms-condition/`, `try/`). Insights live under `app/insights/blog/`, `app/insights/customer-stories/`, `app/insights/downloads/`. Dynamic blog post pages are at `app/insights/blog/[postId]/`.

**Shared UI:** `app/components/` is grouped by purpose (`Banners/`, `Blogs/`, `Buttons/`, `Footer/`, `Form/`, `Generics/`, `Headers/`, `Inputs/`, `Navigations/`, `Partners/`, `Services/`, `Spacing/`, `Testimonial/`, `Transformers/`, `WhyChooseUs/`, `ui/`). Global popup form (`PopUpFormClient`) and toaster mount once in `RootLayout` so any page can trigger them.

**Images:** Remote images come from S3 (`foreware-bucket.s3.us-east-1.amazonaws.com`) — registered in `next.config.ts`. Add new remote hosts there or `next/image` will reject them.

## Conventions worth respecting

- Server components stay async and use `fetch`; never import the axios `apiClient` from a server component (it reads `NEXT_PUBLIC_*` only).
- When a page needs both SSR and client-side cache hydration, fetch on the server and pass the result as `initialData` to the matching `queryOptions` in `app/hooks/<resource>/<name>Queries.ts` — see `postQueries.detail` for the pattern.
- Form schemas use Zod 4 (note: this app uses Zod 4, the admin uses Zod 3 — schemas are not directly portable).
