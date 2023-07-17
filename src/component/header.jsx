import { Badge, Dropdown, Divider, Avatar } from "antd";
import { AimOutlined, ArrowDownOutlined, UserOutlined, DownOutlined, BellOutlined, InboxOutlined } from '@ant-design/icons';

const items = [
    {
        label: <a href="https://www.antgroup.com">1st menu item</a>,
        key: '0',
    },
    {
        label: <a href="https://www.aliyun.com">2nd menu item</a>,
        key: '1',
    },
    {
        type: 'divider',
    },
    {
        label: '3rd menu item',
        key: '3',
    },
];

function Header() {
    return (
        <header>
            <img src={require('./../image/logo512.png')} />
            <p>مرکز عملیات امنیت سایبری بانک ملت</p>

            <Divider type="vertical" className="spacer" />

            <div className="space row">
            <p>5/h</p>
            <AimOutlined className="redIcon"/>
            </div>

            <div className="space row">
                <p>120/s</p>
                <ArrowDownOutlined className="blueIcon"/>
            </div>

            <Divider type="vertical" />

            <Badge count={20} className="notification space">
                <BellOutlined />
            </Badge>
            <Badge count={20} className="notification space">
                <InboxOutlined />
            </Badge>

            <Divider type="vertical" />

            <Dropdown
                menu={{
                    items,
                }}
                className="space"
            >
                <a onClick={(e) => e.preventDefault()}>
                    <Avatar size={30} icon={<UserOutlined />} />
                    <DownOutlined className="arrowIcon" />
                </a>
            </Dropdown>
        </header>
    )
}

export default Header;