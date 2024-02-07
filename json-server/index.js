import jsonServer from "json-server";
import path from "path";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = jsonServer.create()
// eslint-disable-next-line no-undef
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.use(async (req, res, next) => {
	await new Promise((res) => {
		setTimeout(res, 800)
	})

	next()
})
server.use(router)

server.listen(8000, () => {
	console.log('JSON Server is running 8000 port')
})
