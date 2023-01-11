// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/promise-function-async
export const simpleErrorInterceptor = (error: unknown) => {
	// Do something with response error
	return Promise.reject(error);
};
