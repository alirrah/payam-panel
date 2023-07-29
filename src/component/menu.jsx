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
                for (let i = 0; i < result.length; i++) {
                    menu.push({ key: result[i].order, icon: null, children: [], label: result[i].label, type: null })
                    for (let j = 0; j < result[i].subMenus.length; j++) {
                        menu[i].children.push({ key: result[i].subMenus[j].order, icon: null, children: [], label: result[i].subMenus[j].label, type: null });
                        if (result[i].subMenus[j].useAjaxTabs) {
                            for (let h = 0; h < result[i].subMenus[j].tabs.length; h++) {
                                menu[i].children[j].children.push({ key: result[i].subMenus[j].tabs[h].id, icon: null, children: [], label: result[i].subMenus[j].tabs[h].label, type: null })
                            }
                        }
                    }
                }
                console.log(menu[0].children)
                setItems(menu)
                // for (let i = 0; i < result.length; i++) {
                //     setRootSubmenuKeys(prev => [...prev, result[i].key])
                //     //TODO: get count from back-end
                //     result[i].icon = <DotedBadget count={45} icon={CustomIcon(result[i].icon)} />
                //     for (let j = 0; j < result[i].children.length; j++) {
                //         //TODO: key should be change
                //         result[i].children[j].onClick = () => props.changeNumber(i * j + parseInt(result[i].children[j].key))
                //     }
                // }
                // setItems(result)
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