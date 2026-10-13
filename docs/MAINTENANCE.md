# Maintaining the portfolio

This guide covers deployment and routine content updates for the Tialuxe Tech site.

## Deploy to Cloudflare Pages

The site uses Next.js static export. Connect this GitHub repository to Cloudflare Pages and choose **Next.js (Static HTML Export)**, or enter these build settings:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Build command | `npm run build` |
| Build output directory | `out` |

The `functions/` directory is deployed with the site through Pages Git integration. A direct upload of `out/` alone will not deploy the contact endpoint.

## Set up the contact form

The form sends enquiries to `/api/contact`. The handler in `functions/api/contact.js` sends the email through Resend. In the Cloudflare Pages project, open **Settings → Variables and Secrets** and add:

| Name | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Resend API key; save as an encrypted secret |
| `CONTACT_FROM_EMAIL` | Sender address on a verified domain, such as `Tialuxe Tech <hello@example.com>` |
| `CONTACT_TO_EMAIL` | Inbox that receives enquiries |

Redeploy after adding the settings. Send a test enquiry from the deployed site and check the destination inbox. The visitor's address is set as Reply-To.

`npm run dev` serves the site without the Pages Function. To test the endpoint locally, build the site and run `npx wrangler pages dev out`. Put local secrets in `.dev.vars`; it is ignored by Git.

## Update the site

| Content | File |
| --- | --- |
| Home page copy and service cards | `src/app/page.tsx` |
| Projects, case studies, links, and accent colors | `src/data/projects.ts` |
| Project screenshots | `public/projects/<project-slug>/` |
| Base styles and theme colors | `src/app/globals.css` |
| Motion, skills, and project preview styles | `src/app/refinements.css` |
| Page title and social metadata | `src/app/layout.tsx` |
| Site icons | `src/app/icon.png` and `src/app/apple-icon.png` |
| Navigation | `src/components/SiteHeader.tsx` |
| Contact form | `src/components/ContactForm.tsx` and `functions/api/contact.js` |

### Add project images

Create a folder in `public/projects/` matching the project's `slug`, then add a `media` object to its entry in `src/data/projects.ts`. `media.cover` is cropped into the circular preview on the project card; `media.gallery` supplies images on the case study page. Include each gallery image's dimensions and a useful description. Set `scroll: true` for a tall screenshot that visitors should scroll inside the browser frame. The 5D Print Factory entry is an example.

The `accent` hex value controls the project card and case study colors. Projects without media keep the color based preview. Keep outcome claims aligned with information that can be verified.

## Before publishing a change

Run `npm run lint` and `npm run build`, then check the changed pages on desktop and mobile. If the contact form or its settings changed, send a test enquiry after deployment.
