import React, { useState } from 'react';
import { DashboardOutlined, DeploymentUnitOutlined, AimOutlined, FundOutlined, BulbOutlined, SettingOutlined, SecurityScanOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import DotedBadget from './doted-badge';

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
    getItem('پیشخوان ها', 'sub1', <DotedBadget count={45} icon={<DashboardOutlined />} />, [
        getItem('مورد یک', '1'),
        getItem('مورد دو', '2'),
        getItem('مورد سه', '3'),
        getItem('مورد چهار', '4'),
    ]),
    getItem('گزارش ها', 'sub2', <DotedBadget count={2} icon={<FundOutlined />} />, [
        getItem('مورد پنج', '5'),
        getItem('مورد شش', '6'),
        getItem('زیر منو', 'sub3', null, [getItem('مورد هفت', '7'), getItem('مورد هشت', '8')]),
    ]),
    getItem('حوادث', 'sub4', <DotedBadget count={18} icon={<AimOutlined />} />, [
        getItem('مورد نه', '9'),
        getItem('مورد ده', '10'),
        getItem('مورد یازده', '11'),
        getItem('مورد دوازده', '12'),
    ]),
    getItem('رویدادها', 'sub5', <DotedBadget count={990} icon={<SecurityScanOutlined />} />, [
        getItem('مورد سیزده', '13'),
        getItem('مورد چهارده', '14'),
        getItem('مورد پانزده', '15'),
        getItem('مورد شانزده', '16'),
    ]),
    getItem('دانش', 'sub6', <DotedBadget count={0} icon={<BulbOutlined />} />, [
        getItem('مورد هفده', '17'),
        getItem('مورد هجده', '18'),
        getItem('مورد نوزده', '19'),
        getItem('مورد بیست', '20'),
    ]),
    getItem('محیط', 'sub7', <DotedBadget count={10} icon={<DeploymentUnitOutlined />} />, [
        getItem('مورد بیست و یک', '21'),
        getItem('مورد بیست و دو', '22'),
        getItem('مورد بیست و سه', '23'),
        getItem('مورد بیست و چهار', '24'),
    ]),
    getItem('تنظیمات', 'sub8', <DotedBadget count={0} icon={<SettingOutlined />} />, [
        getItem('مورد بیست و پنج', '25'),
        getItem('مورد بیست و شش', '26'),
        getItem('مورد بیست و هفت', '27'),
        getItem('مورد بیست وهشت', '28'),
        getItem('مورد بیست و نه', '29'),
        getItem('مورد سی', '30'),
        getItem('مورد سی و یک', '31'),
        getItem('مورد سی و دو', '32'),
        getItem('مورد سی و سه', '33'),
        getItem('مورد سی و چهار', '34'),
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
            <img src={require('./../image/logo512.png')} alt="ravin logo" />
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