import { List, Divider } from 'antd';
import { LoginOutlined, AimOutlined, CloseCircleOutlined } from '@ant-design/icons';


const data = [
    {
        icon: <AimOutlined />,
        danger: true,
        title: 'یک حادثه روی سرور ایمیل رخ داده است',
        time: '3 ثانیه پیش',
        description: 'حادثه از نوع باج افزار از مبدا 182.36.128.51 به سرور ایمیل شما می باشد.'
    },
    {
        icon: <LoginOutlined />,
        danger: false,
        title: 'ورود موفق به سامانه',
        danger: false,
        time: '3 ساعت پیش',
        description: 'ورود از آی پی 192.168.87.10 در تاریخ 12 مهر 1402 می باشد.'

    },
    {
        icon: <LoginOutlined />,
        danger: true,
        title: 'ورود ناموفق به سامانه',
        time: '5 ساعت پیش',
        description: 'ورود از آی پی 192.168.87.10 در تاریخ 12 مهر 1402 می باشد.'
    },
    {
        icon: <LoginOutlined />,
        danger: false,
        title: 'ورود موفق به سامانه',
        danger: false,
        time: '3 ساعت پیش',
        description: 'ورود از آی پی 192.168.87.10 در تاریخ 12 مهر 1402 می باشد.'

    },
];

function Notification() {

    return (
        <>
            <List
                itemLayout="horizontal"
                dataSource={data}
                className='notification'
                footer={
                    <>
                        <a href='#'>رفتن به اعلان ها</a>
                        <Divider type="vertical" className="spacer" />
                        <a href='#'>علامت گذاری همه به عنوان خوانده شده</a>
                    </>
                }
                renderItem={(item) => (
                    <List.Item
                    >
                        <List.Item.Meta
                            avatar={item.icon}
                            title={item.title}
                            description={item.time}
                            className={(item.danger ? "danger" : "success")}
                        />
                        <div className='descriptionPart'>
                            <p className='description'>{item.description}</p>
                            <a href="#">بیشتر</a>
                        </div>
                        <CloseCircleOutlined className='closeBtn' />
                    </List.Item>
                )}
            />
        </>
    )
}

export default Notification