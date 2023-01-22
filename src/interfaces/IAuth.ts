export interface IAuthLogin {
	username: string;
	password: string;
}

export interface IAuthRegister {
	username: string;
	email: string;
	password: string;
	password2: string;
}

export interface IAuthResponse {
	token: string;
	username: string;
}
