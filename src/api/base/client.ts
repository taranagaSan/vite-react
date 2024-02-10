import { createService } from '../services/carrier-bff.ts'

const createApi = () => {
	return createService()
}

let api: ReturnType<typeof createService> | null = null

const getApi = () => {
	if (api) api = createApi()
	return api
}

export {
	getApi,
}
