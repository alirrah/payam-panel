import { Tabs } from 'antd';

const onChange = (key) => {
    console.log(key);
};
const items = [
    {
        key: '1',
        label: `تجهیزات`,
        children: `Content of Tab Pane 1`,
    },
    {
        key: '2',
        label: `مراکز عملیات امنیت`,
        children: `Content of Tab Pane 2`,
    },
    {
        key: '3',
        label: `جمع کننده ها`,
        children: `Content of Tab Pane 3`,
    },
    {
        key: '4',
        label: `حسگرها`,
        children: `Content of Tab Pane 4`,
    },
    {
        key: '5',
        label: `پویشگرها`,
        children: `Content of Tab Pane 4`,
    },
    {
        key: '6',
        label: `کویرئیز`,
        children: `Content of Tab Pane 4`,
    },
    {
        key: '7',
        label: `شخص ثالث`,
        children: `Content of Tab Pane 4`,
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