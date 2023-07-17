import React, { useState } from 'react';
import { DashboardOutlined, DeploymentUnitOutlined, AimOutlined, FundOutlined, BulbOutlined, SettingOutlined, SecurityScanOutlined } from '@ant-design/icons';
import { Menu, Badge } from 'antd';

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    getItem('پیشخوان ها', 'sub1', <Badge count={20} dot={false} offset={[20, -5]}>
        <DashboardOutlined />
    </Badge>, [
        getItem('Option 1', '1'),
        getItem('Option 2', '2'),
        getItem('Option 3', '3'),
        getItem('Option 4', '4'),
    ]),
    getItem('گزارش ها', 'sub2', <Badge count={2} dot={false} offset={[20, -5]}>
        <FundOutlined />
    </Badge>, [
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
        getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
    ]),
    getItem('حوادث', 'sub4', <Badge count={0} dot={false} offset={[20, -5]}>
        <AimOutlined />
    </Badge>, [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
        getItem('Option 11', '11'),
        getItem('Option 12', '12'),
    ]),
    getItem('رویدادها', 'sub5', <Badge count={9990} dot={false} offset={[20, -5]}>
        <SecurityScanOutlined />
    </Badge>, [
        getItem('Option 9', '13'),
        getItem('Option 10', '14'),
        getItem('Option 11', '15'),
        getItem('Option 12', '16'),
    ]),
    getItem('دانش', 'sub6', <Badge count={50} dot={false} offset={[20, -5]}>
        <BulbOutlined />
    </Badge>, [
        getItem('Option 9', '17'),
        getItem('Option 10', '18'),
        getItem('Option 11', '19'),
        getItem('Option 12', '20'),
    ]),
    getItem('محیط', 'sub7', <Badge count={10} dot={false} offset={[20, -5]}>
        <DeploymentUnitOutlined />
    </Badge>, [
        getItem('Option 9', '21'),
        getItem('Option 10', '22'),
        getItem('Option 11', '23'),
        getItem('Option 12', '24'),
    ]),
    getItem('تنظیمات', 'sub8', <Badge count={0} dot={false} offset={[20, -5]}>
        <SettingOutlined />
    </Badge>, [
        getItem('Option 9', '25'),
        getItem('Option 10', '26'),
        getItem('Option 11', '27'),
        getItem('Option 12', '28'),
        getItem('Option 12', '29'),
        getItem('Option 12', '30'),
        getItem('Option 12', '31'),
        getItem('Option 12', '32'),
        getItem('Option 12', '33'),
        getItem('Option 12', '34'),
    ]),
];

const rootSubmenuKeys = ['sub1', 'sub2', 'sub4', 'sub5', 'sub6', 'sub7', 'sub8'];

function SidebarMenu() {
    const [openKeys, setOpenKeys] = useState(['sub1']);
    const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            /* open and close itslef */
            /*setOpenKeys(prev => (latestOpenKey ? [...prev, latestOpenKey] : []));*/
            /* open itself and close others */
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    return (
        <section className='sidebar'>
            <img src={require('./../image/logo512.png')} />
            <Menu
                className='menu'
                mode='inline'
                openKeys={openKeys}
                onOpenChange={onOpenChange}
                items={items}
            />
        </section>

    )
}

export default SidebarMenu;