This is my first deep dive into learning Next.js and Next.js component creation.

This repo contains my Next.js code with 3 components, each displayed through concepts like routing and navigation.

1. WelcomeCard Component - Created with mostly images/gifs, this component displays a welcome message with animation. This component is where I first learned about imports.
This component is displayed on the home page (localhost:3000) by importing the component on the page.tsx file.

2. Interactive Counter Component - This component is an interactive component. This is where I learned about the difference in usage between Server Side Rendering and
Client Side Rendering. This component is interactive and uses a client-only feature called "useState". Therefore, I rendered this on the Client side. This is also where I learned
about Tailwind CSS props and how they can beautify most of your website components and web pages.

3. StudentInfo Component - This component handles inputs, and this is where I first learned about "<<forms>>". Concepts such as: Mapping over an array to dynamically render input and 
Conditional rendering was also implemented.




This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
