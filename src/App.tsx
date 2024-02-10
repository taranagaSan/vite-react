import React from 'react';
import { Layout, theme } from 'antd'
import './App.css'
import styles from './App.module.css'
import { AppHeader } from './common/header'
import { AppRouter } from './router'
import { BrowserRouter } from 'react-router-dom'
import { AppMenu } from './common/menu'


const { Content, Sider } = Layout;

const App: React.FC = () => {
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	return (
        <BrowserRouter>
            <Layout className={styles.layout}>
                <AppHeader />
                <Layout>
                    <Sider
                        className={styles.aside}
                        style={{
                            background: colorBgContainer,
                        }}
                    >
                        <AppMenu />
                    </Sider>
                    <Layout className={styles.content}>
                        <Content>
                            <AppRouter />
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
		</BrowserRouter>
	);
};

export default App;
