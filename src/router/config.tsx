import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons'

export enum AppRoutes {
	main = 'main',
	calendar = 'calendar',
	'dictionaries' = 'dictionaries'
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.main]: '/',
	[AppRoutes.calendar]: '/calendar',
	[AppRoutes.dictionaries]: '/dictionaries',
}

export const routes = [
	{
		label: 'Курьеры',
		path: RoutePath.main,
		element: (<div>couriers</div>),
		icon: UserOutlined,
	},
	{
		label: 'Календарь',
		path: RoutePath.calendar,
		element: (<div>calendar</div>),
		icon: LaptopOutlined,
	},
	{
		label: 'Справочники',
		path: RoutePath.dictionaries,
		element: (<div>dictionaries</div>),
		icon: NotificationOutlined,
	},
]
