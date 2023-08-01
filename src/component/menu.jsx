import { useState, useEffect } from 'react';
import { Menu } from 'antd';
import DotedBadget from './doted-badge';
import axios from "axios";
import * as AntdIcons from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

function SidebarMenu(props) {

    const [openKeys, setOpenKeys] = useState([]);
    const [rootSubmenuKeys, setRootSubmenuKeys] = useState([]);
    const [items, setItems] = useState();
    const navigate = useNavigate();

    const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

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
                let root = [];
                result.forEach((item) => {
                    root.push(item.order.toString());
                    menu.push({ key: item.order, icon: <DotedBadget count={item.order} icon={CustomIcon('TagOutlined')} />, children: [], label: item.label, type: null })
                    item.subMenus.forEach((subitem) => {
                        //TODO: key is not true
                        menu[menu.length - 1].children.push({
                            key: parseInt(menu.length.toString() + menu[menu.length - 1].children.length.toString()) * 3, icon: null, children: null, label: subitem.label, type: null, onClick: () => {
                                if (subitem.useAjaxTabs) {
                                    props.changeNumber(subitem.tabs)
                                }
                                navigate(subitem.url);
                            }
                        })
                    })
                    if (item.subMenus.length === 0) {
                        menu[menu.length - 1].children = null
                    }
                });
                setRootSubmenuKeys(root);
                setItems(menu);
            }
        }).catch(error => {
            console.log(error)
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