'use server';

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";

export const signIn = async () => {
  try {
    // mutation / database / make fetch
  } catch (error) {
    console.error('Error', error);
  }
}

export const signUp = async (userData: SignUpParams) => {
  try {
    const { account } = await createAdminClient();
    const await account.create(ID.unique(), email, password, name);
    const session = await account.createEmailPasswordSession(email, password);

    cookies().set("my-custom-session", session.secret, {
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
