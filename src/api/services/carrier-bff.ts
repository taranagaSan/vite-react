import { Api } from '../generated/oe-lm-carrier-bff.ts'
import { createApi } from '../base/create-api.ts'

export function createService() {
	return {
		carrierBff: createApi(Api, 'http://localhost:8000')
	}
}
