import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

//Validar que cuando estas logeado no puedas ingresar a la pagina de marketing
const isProtectedRoute = createRouteMatcher(['/dashboard(.*)', '/forum(.*)', '/plan(.*)', '/payment-details(.*)', '/thanks-payment(.*)'])
const isPublicRoute = createRouteMatcher(['/','/sign-in(.*)', '/sign-up(.*)'])

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth()
  
  if (!userId && isProtectedRoute(req)) {
    const homeUrl = new URL('/', req.url)
    return NextResponse.redirect(homeUrl)
  }

  if (isProtectedRoute(req)) await auth().protect()
})

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}