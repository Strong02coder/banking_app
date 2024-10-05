'use server';

export const signIn = async () => {
	try {
		// mutaiton / database / make fetch
	} catch (error) {
		console.error('Error',error)
	}
}

export const signUp = async (userData: SignUpParams) => {
	try {
		// mutaiton / database / make fetch
	} catch (error) {
		console.error('Error',error)
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
