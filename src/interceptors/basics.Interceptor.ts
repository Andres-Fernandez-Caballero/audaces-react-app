import { AxiosRequestConfig } from 'axios';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const logerInterceptor = (request: AxiosRequestConfig) => {
	console.warn('Starting Request', request);
	return request;
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const setTokenInHeader = (config: AxiosRequestConfig) => {
	const userToken = localStorage.getItem('userToken');
	config.headers = {
		Authorization: userToken !== null ? `Bearer ${userToken}` : '',
		Accept: 'application/json',
		'Content-Type': 'application/json',
		'Cache-Control': 'no-cache',
	};
	return config;
};
