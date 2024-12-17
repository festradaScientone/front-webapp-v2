import { auth } from '@clerk/nextjs/server';

export async function getClerkToken() {
    const template = "scientone-access-users";
    const { getToken } = auth();
    const token = await getToken( template );
    return token;
}