import { useState, useEffect } from 'react';
import { Menu } from 'antd';
import DotedBadget from './doted-badge';
import axios from "axios";
import * as AntdIcons from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

function SidebarMenu(props) {

    const [openKeys, setOpenKeys] = useState([]);
    const [defaultKeys, setDefaultKeys] = useState([]);
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
                    root.push(item.key);
                    menu.push({ key: item.key, icon: <DotedBadget count={item.order} icon={CustomIcon('TagOutlined')} />, children: [], label: item.label, type: null })
                    item.children.forEach((subitem) => {
                        //TODO: key is not true
                        menu[menu.length - 1].children.push({
                            key: subitem.key, icon: null, children: null, label: subitem.label, type: null, onClick: () => {
                                props.changeNumber([
                                    {
                                      key: '1',
                                      label: 'Tab 1',
                                      children: 'Content of Tab Pane 1',
                                    },
                                    {
                                      key: '2',
                                      label: 'Tab 2',
                                      children: 'Content of Tab Pane 2',
                                    },
                                    {
                                      key: '3',
                                      label: 'Tab 3',
                                      children: 'Content of Tab Pane 3',
                                    },
                                  ])
                                navigate(subitem.key);
                            }
                        })
                    })
                });
                setDefaultKeys([
                    menu[0].key.toString(),
                    menu[0].children[0].key.toString(),
                ]);
                setOpenKeys([menu[0].key.toString()]);
                setRootSubmenuKeys(root);
                setItems(menu);
                menu[0].children[0].onClick();
                props.changeNumber([
                    {
                      key: 1,
                      label: 'Tab 1',
                    },
                    {
                      key: 2,
                      label: 'Tab 2',
                    },
                    {
                      key: 3,
                      label: 'Tab 3',
                    },
                  ]);
            }
        }).catch(error => {
            console.log(error)
        });
    }, []);

    return (
        <section className="sidebar">
            <img src={require("./../image/logo512.png")} alt="ravin logo" />
            {items && (
                <Menu
                    className="menu"
                    defaultSelectedKeys={defaultKeys}
                    mode="inline"
                    openKeys={openKeys}
                    onOpenChange={onOpenChange}
                    items={items}
                />
            )}
        </section>
    );
}

export default SidebarMenu;