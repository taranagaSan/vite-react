import Axios, { AxiosInstance } from 'axios'

export type ApiConstructor<T> = new (axios: AxiosInstance) => T

const createApi = <T>(
	Api: ApiConstructor<T>,
	baseURL: string
): T => {
	const axios = Axios.create({
		timeout: 59000,
		baseURL,
		headers: {},
	})

	return new Api(axios)
}

export { createApi }
