# TutorialNext13CrashCourse

Repo created using tutorial: https://www.youtube.com/watch?v=4xduSsxa5Os
GitHub Tutorial: https://github.com/developedbyed/fullstack-next

## Tech Stack: 
- Next.js 13 (app directory) - Meta Framework, 
- Tailwind CSS - CSS Framework, 
- ESLint - Linter, 
- Prisma - Database ORM (PostgreSQL),
- NextAuth.js - Authentication,

### Steps to config:
1. `npx create-next-app@latest app` (All default options)
1a. Add .env to .gitignore

2. `npm install typescript ts-node @types/node --save-dev`

3. `npx prisma init`

4. Configure Prisma:
Info:
```
✔ Your Prisma schema was created at prisma/schema.prisma
  You can now open it in your favorite editor.

warn You already have a .gitignore file. Don't forget to add `.env` in it to not commit any private information.

Next steps:
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started

2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.

3. Run npx prisma db pull to turn your database schema into a Prisma schema.

4. Run npx prisma generate to generate the Prisma Client. You can then start querying your database.

More information in our documentation:
https://pris.ly/d/getting-started
```

4a. Copy env variable from railway to .env file
4b. Add schema in prisma/schema.prisma
4c. `npm install @prisma/client`
4d. Configure prisma client in app/prisma/client.ts
4e. `npx prisma migrate dev`
4f. `npx prisma generate`

5. `npm install next-auth`
5a. Create route.ts in app/api/auth/[...nextauth]/route.ts
https://next-auth.js.org/configuration/initialization#route-handlers-app
https://authjs.dev/reference/adapter/prisma#setup
5b. Install Prism adapter:
```
npm install @prisma/client @auth/prisma-adapter
npm install prisma --save-dev
```

6. Init project in Google Cloud Console.
6a. Go to Credentials and create OAuth Client ID:
https://console.cloud.google.com/apis/credentials
- Web Application
- Javascript origin: http://localhost:3000 (for local development)
- Redirect URI: http://localhost:3000/api/auth/callback/google
6b. Copy secret to .env.local

7. Copy schema.prisma from https://authjs.dev/reference/adapter/prisma#setup
7a. Connect Posts with Users
7b. `npx prisma migrate dev`

Now you can start developing your app!

## Cloud Services:
- Railway - Database Hosting (PostgreSQL) [500 Hrs free per month - enough for local development]

## My changes:
- Using src directory for components, pages, styles, etc.
- Auto generated TailwindCSS & ESLint by create-next-app
- Prisma client.ts in app/prisma/ folder
- Auth.js route.ts in app/api/auth/[...nextauth]/route.ts
- API route in app/api/posts/route instead of pages/ - await request.json();
- using     `setToastPostID(toast.loading("Posting..."))`; instead of `toastPostID = toast.loading("Posting...", { id: "post" })`;
## Tutorial times:
25.06: 56:48
26.06: 1:38
28.06: 1:44

- stopped at 2:05 due to annoying bugs in the tutorial.