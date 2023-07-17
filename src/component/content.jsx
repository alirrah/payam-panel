import { Tabs } from 'antd';
import TabPage from "./tabpage";

const onChange = (key) => {
    console.log(key);
};
const items = [
    {
        key: '1',
        label: `تجهیزات`,
        children: <TabPage />,
    },
    {
        key: '2',
        label: `مراکز عملیات امنیت`,
        children: <TabPage />,
    },
    {
        key: '3',
        label: `جمع کننده ها`,
        children: <TabPage />,
    },
    {
        key: '4',
        label: `حسگرها`,
        children: <TabPage />,
    },
    {
        key: '5',
        label: `پویشگرها`,
        children: <TabPage />,
    },
    {
        key: '6',
        label: `کویرئیز`,
        children: <TabPage />,
    },
    {
        key: '7',
        label: `شخص ثالث`,
        children: <TabPage />,
    },
];


function Content() {
    return (
        <section className="content">
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />

        </section>
    )
}

export default Content;