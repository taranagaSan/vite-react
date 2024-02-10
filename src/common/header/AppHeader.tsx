import { Avatar, Button, Divider, Select, theme } from 'antd'
import { LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { Header } from 'antd/es/layout/layout'

import styles from './AppHeader.module.css'

export const AppHeader = () => {
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	return (
		<Header className={styles.header} style={{ background: colorBgContainer }}>
			<Select
				style={{ width: '250px' }}
				onChange={() => {}}
			>
				<Select.Option value="sample">Sample</Select.Option>
			</Select>
			<div className={styles.actions}>
				<div>user name</div>
				<Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
				<Divider type={'vertical'} />
				<Button
					shape="circle"
					icon={<LogoutOutlined />}
				/>
			</div>
		</Header>
	)
}
