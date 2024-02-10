import React from 'react'
import { Menu, MenuProps } from 'antd'
import { routes } from '../../router/config.tsx'
import { Link } from 'react-router-dom'

const menuList: MenuProps['items'] = routes.map((r) => ({
    key: r.path,
    icon: React.createElement(r.icon),
    label: <Link to={r.path}>{r.label}</Link>,
}));

export const AppMenu = () => {
    return (
        <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            items={menuList}
        />
    )
}
