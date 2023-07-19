import { List, Divider, Tag, Avatar } from 'antd';

const data = [
    {
        icon: <Avatar shape="square" size="large" />,
        title: 'درخواست برای افزایش منابع سرور ایمیل',
        time: '3 ساعت پیش',
        description: 'نگهداری سامانه',
        tages: [
            {
                name: "فوری",
                tag: "error",
            },
            {
                name: "مهلت رسیدگی تا 2 روز دیگر",
                tag: "warning"
            },
            {
                name: "بررسی شده",
                tag: "success"
            }
        ]
    },
    {
        icon: <Avatar shape="square" size="large" />,
        title: 'درخواست برای افزایش منابع سرور ایمیل',
        time: '3 ساعت پیش',
        description: 'نگهداری سامانه',
        tages: [
            {
                name: "فوری",
                tag: "error",
            },
            {
                name: "مهلت رسیدگی تا 2 روز دیگر",
                tag: "warning"
            }
        ]
    },
    {
        icon: <Avatar shape="square" size="large" />,
        title: 'درخواست برای افزایش منابع سرور ایمیل',
        time: '3 ساعت پیش',
        description: 'نگهداری سامانه',
        tages: [
            {
                name: "فوری",
                tag: "error",
            },
            {
                name: "مهلت رسیدگی تا 2 روز دیگر",
                tag: "warning"
            }
        ]
    },
    {
        icon: <Avatar shape="square" size="large" />,
        title: 'درخواست برای افزایش منابع سرور ایمیل',
        time: '3 ساعت پیش',
        description: 'نگهداری سامانه',
        tages: [
            {
                name: "فوری",
                tag: "error",
            },
            {
                name: "مهلت رسیدگی تا 2 روز دیگر",
                tag: "warning"
            },
            {
                name: "فوری",
                tag: "error",
            },
            {
                name: "مهلت رسیدگی تا 2 روز دیگر",
                tag: "warning"
            },
            {
                name: "فوری",
                tag: "error",
            },
        ]
    },
];

function Ticket() {

    return (
        <>
            <List
                itemLayout="horizontal"
                dataSource={data}
                className='ticket'
                footer={
                    <>
                        <a href='#'>رفتن به تیکت ها</a>
                        <Divider type="vertical" className="spacer" />
                        <a href='#'>ارسال تیکت جدید</a>
                    </>
                }
                renderItem={(item) => (
                    <List.Item
                    >
                        <List.Item.Meta
                            avatar={item.icon}
                            title={item.title}
                            description={item.time}
                        />
                        <div className='descriptionPart'>
                            <p className='description'>{item.description}</p>
                            {item.tages.map((tag) => (
                                <Tag color={tag.tag}>{tag.name}</Tag>
                            ))}
                        </div>
                    </List.Item>
                )}
            />
        </>
    )
}

export default Ticket;