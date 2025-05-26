import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
  // This tells your app which pages should use Clerk's checks.This is the list of rules for where to apply the middleware:
  // and run everywhere its needed
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};



// Middleware is like a security guard that stands between the user and your page.
//  When someone tries to open a page in your app, middleware checks:

// This brings in Clerk's middleware tool — a helper that handles login and user checks.


