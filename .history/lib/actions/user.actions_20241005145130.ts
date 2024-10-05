'use server';

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";

export const signIn = async () => {
  try {
    // mutation / database / make fetch
  } catch (error) {
    console.error('Error', error);
  }
}

export const signUp = async (userData: SignUpParams) => {
	const { email, password, firstName, lastName } = userData;

  try {
    const { account } = await createAdminClient();
    const newUserAccount = await account.create(
			ID.unique(), 
			email, 
			password, 
			`${firstName} ${lastName}`
		);
    const session = await account.createEmailPasswordSession(email, password);

    cookies().set("app-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

  } catch (error) {
    console.error('Error', error);
  }
}

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    return await account.get();
  } catch (error) {
    return null;
  }
}