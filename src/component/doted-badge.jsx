import { Badge } from "antd";
import { DashboardOutlined, DeploymentUnitOutlined, AimOutlined, FundOutlined, BulbOutlined, SettingOutlined, SecurityScanOutlined } from '@ant-design/icons';


function DotedBadget({count, icon}) {
    return (
        <Badge count={count} offset={[15, 0]} className="dotedBadget">
            <div className="dot" style={{
              backgroundColor: (count > 0 ? "#ff4d4f" : "#fff")
            }}></div>
            {icon}
        </Badge>
    )
}

export default DotedBadget
