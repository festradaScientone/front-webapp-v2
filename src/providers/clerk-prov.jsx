'use client'

import { ClerkProvider, GoogleOneTap } from "@clerk/clerk-react";

export const ClientProvider = ({ children }) => {
    return (
        <ClerkProvider
            publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
        >
            <GoogleOneTap signInForceRedirectUrl="/dashboard" />
            {children}            
        </ClerkProvider>
    );
}