import { Badge, Dropdown, Divider, Avatar, Popover } from "antd";
import { AimOutlined, ArrowDownOutlined, UserOutlined, DownOutlined, BellOutlined, InboxOutlined } from '@ant-design/icons';
import Notification from "./notification";
import Ticket from "./ticket";

const items = [
    {
        label: 'مورد اول',
        key: '0',
    },
    {
        label: 'مورد دوم',
        key: '1',
    },
    {
        type: 'divider',
    },
    {
        label: 'مورد سوم',
        key: '3',
    },
];

function Header() {

    return (
        <header>
            <img src={require('./../image/logo512.png')} alt="your logo" />
            <p>مرکز عملیات امنیت سایبری بانک ملت</p>

            <Divider type="vertical" className="spacer" />

            <div className="space row">
                <p className="leftDirection">5/h</p>
                <AimOutlined className="redIcon" />
            </div>

            <div className="space row">
                <p className="leftDirection">120/s</p>
                <ArrowDownOutlined className="blueIcon" />
            </div>

            <Divider type="vertical" />

            <Popover
                content={<Notification />}
                title="اعلان ها"
                trigger="click"
                arrow={false}
            >
                <Badge count={20} className="notification bgspace">
                    <BellOutlined />
                </Badge>
            </Popover>

            <Popover
                content={<Ticket />}
                title="تیکت های منتظر رسیدگی"
                trigger="click"
                arrow={false}
            >
                <Badge count={20} className="notification space">
                    <InboxOutlined />
                </Badge>
            </Popover>

            <Divider type="vertical" />

            <Dropdown
                menu={{
                    items,
                }}
                className="space"
                trigger={['click']}
            >
                <a href="#" onClick={(e) => e.preventDefault()} >
                    <Avatar size={30} icon={<UserOutlined />} />
                    <DownOutlined className="arrowIcon" />
                </a>
            </Dropdown>
        </header>
    )
}

export default Header;