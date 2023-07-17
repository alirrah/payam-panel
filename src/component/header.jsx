import { Badge} from "antd";
import { DashboardOutlined } from '@ant-design/icons';


function Header() {
    return (
        <header>
        <img src={require('./../image/logo512.png')} />
        <p>مرکز عملیات امنیت سایبری بانک ملت</p>

        <Badge count={20} dot={false} offset={[20, -5]}>
        <DashboardOutlined />
    </Badge>
        </header>
    )
}

export default Header;