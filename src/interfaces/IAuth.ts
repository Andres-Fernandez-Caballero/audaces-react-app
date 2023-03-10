import { Iuser } from '@store/slices/auth.slyce';

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

export interface IResponse {
	response: string;
}

export interface IAuthSuccessfulResponse extends Iuser, IResponse {}

export interface IAuthWrongResponse extends IResponse {}
