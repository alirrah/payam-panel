import { useState, useEffect } from 'react';
import { Menu } from 'antd';
import DotedBadget from './doted-badge';
import axios from "axios";
import * as AntdIcons from '@ant-design/icons';

function SidebarMenu(props) {

    const [openKeys, setOpenKeys] = useState([]);
    const [rootSubmenuKeys, setRootSubmenuKeys] = useState([]);
    const [items, setItems] = useState();

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

    function getItem(label, key, icon, children, type) {
        return {
            key,
            icon,
            children,
            label,
            type,
        };
    }

    const CustomIcon = (type) => {
        const AntdIcon = AntdIcons[type]
        return <AntdIcon />
    }

    useEffect(() => {
        axios.get(
            'https://newcrm.iran.liara.run/AdminApi/getmenuItems',
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        ).then((response) => {
            if (response.status === 200) {
                let result = response.data.result;
                let menu = [];
                result.forEach((item) => {
                    menu.push({ key: item.order, icon: null, children: [], label: item.label, type: null })
                    item.subMenus.forEach((subitem) => {
                        menu[menu.length - 1].children.push({ key: subitem.order, icon: null, children: [], label: subitem.label, type: null })
                         if (subitem.useAjaxTabs) {
                             subitem.tabs.forEach((tab) => {
                                 menu[menu.length - 1].children[menu[menu.length - 1].children.length - 1].children.push({ key: tab.id, icon: null, children: [], label: tab.label, type: null })
                             })
                         }
                    })
                });
                console.log(menu[0].children)
                setItems(menu)
            }
        });
    }, []);

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