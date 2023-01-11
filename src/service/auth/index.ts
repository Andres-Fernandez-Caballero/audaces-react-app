// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const signIn = async (email: string, password: string) => {
	return await new Promise(resolve => {
		setTimeout(() => {
			resolve({ email, uid: '1231' });
		}, 1000);
	});
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const signOut = async () => {
	return await new Promise<void>(resolve => {
		setTimeout(() => {
			resolve();
		}, 1000);
	});
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const signUp = async (createUserFormDto: unknown) => {
	return await new Promise(resolve => {
		setTimeout(() => {
			resolve({ email: '', uid: '1231' });
		}, 1000);
	});
};
