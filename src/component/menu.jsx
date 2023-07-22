import React, { useState } from 'react';
import { DashboardOutlined, DeploymentUnitOutlined, AimOutlined, FundOutlined, BulbOutlined, SettingOutlined, SecurityScanOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import DotedBadget from './doted-badge';

const rootSubmenuKeys = ['sub1', 'sub2', 'sub4', 'sub5', 'sub6', 'sub7', 'sub8'];

function SidebarMenu(props) {

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

    const getItem = (label, key, icon, children) => {
        return {
            key: key,
            icon: icon,
            children: children,
            label: label,
            onClick: () => (Number.isInteger(key) ? props.context(key) : null),
        };
    }

    const items = [
        getItem(
            'پیشخوان ها',
            'sub1',
            <DotedBadget count={45} icon={<DashboardOutlined />} />,
            [
                getItem('مورد یک', 1, null, null),
                getItem('مورد دو', 2, null, null),
                getItem('مورد سه', 3, null, null),
                getItem('مورد چهار', 4, null, null),
            ],
        ),
        getItem(
            'گزارش ها',
            'sub2',
            <DotedBadget count={2} icon={<FundOutlined />} />,
            [
                getItem('مورد پنج', 5, null, null),
                getItem('مورد شش', 6, null, null),
                getItem('زیر منو', 'sub3', null,
                    [
                        getItem('مورد هفت', 7, null, null),
                        getItem('مورد هشت', 8, null, null),
                    ],
                ),
            ],
        ),
        getItem(
            'حوادث',
            'sub4',
            <DotedBadget count={18} icon={<AimOutlined />} />,
            [
                getItem('مورد نه', 9, null, null),
                getItem('مورد ده', 10, null, null),
                getItem('مورد یازده', 11, null, null),
                getItem('مورد دوازده', 12, null, null),
            ],
        ),
        getItem(
            'رویدادها',
            'sub5',
            <DotedBadget count={990} icon={<SecurityScanOutlined />} />,
            [
                getItem('مورد سیزده', 13, null, null),
                getItem('مورد چهارده', 14, null, null),
                getItem('مورد پانزده', 15, null, null),
                getItem('مورد شانزده', 16, null, null),
            ]
        ),
        getItem(
            'دانش',
            'sub6',
            <DotedBadget count={0} icon={<BulbOutlined />} />,
            [
                getItem('مورد هفده', 17, null, null),
                getItem('مورد هجده', 18, null, null),
                getItem('مورد نوزده', 19, null, null),
                getItem('مورد بیست', 20, null, null),
            ]
        ),
        getItem(
            'محیط',
            'sub7',
            <DotedBadget count={10} icon={<DeploymentUnitOutlined />} />,
            [
                getItem('مورد بیست و یک', 21, null, null),
                getItem('مورد بیست و دو', 22, null, null),
                getItem('مورد بیست و سه', 23, null, null),
                getItem('مورد بیست و چهار', 24, null, null),
            ]
        ),
        getItem(
            'تنظیمات',
            'sub8',
            <DotedBadget count={0} icon={<SettingOutlined />} />,
            [
                getItem('مورد بیست و پنج', 25, null, null),
                getItem('مورد بیست و شش', 26, null, null),
                getItem('مورد بیست و هفت', 27, null, null),
                getItem('مورد بیست وهشت', 28, null, null),
                getItem('مورد بیست و نه', 29, null, null),
                getItem('مورد سی', 30, null, null),
                getItem('مورد سی و یک', 31, null, null),
                getItem('مورد سی و دو', 32, null, null),
                getItem('مورد سی و سه', 33, null, null),
                getItem('مورد سی و چهار', 34, null, null),
            ],
        ),
    ];

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