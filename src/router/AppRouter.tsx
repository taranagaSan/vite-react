import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routes } from './config.tsx'

const AppRouter = () => {
	return (
		<Suspense fallback={<div>...loading</div>}>
			<Routes>
				{routes.map(({ element, path }) => (
					<Route
						key={path}
						path={path}
						element={element}
					/>
				))}
			</Routes>
		</Suspense>
	)
}

export default AppRouter
