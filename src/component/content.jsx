import { Tabs } from 'antd';
import TabPage from "./tabpage";
import PageContext from './context';
import { useContext } from 'react';


const onChange = (key) => {
    console.log(key);
};


function Content() {

    const number = useContext(PageContext)
    const items = [
        {
            key: '1',
            label: `تجهیزات`,
            children: <TabPage title="تجهیزات" />,
        },
        {
            key: '2',
            label: `مراکز عملیات امنیت`,
            children: <TabPage title='مراکز عملیات امنیت' />,
        },
        {
            key: '3',
            label: `جمع کننده ها`,
            children: <TabPage title='جمع کننده ها' />,
        },
        {
            key: '4',
            label: `حسگرها`,
            children: <TabPage title='حسگرها' />,
        },
        {
            key: '5',
            label: `پویشگرها`,
            children: <TabPage title='پویشگرها' />,
        },
        {
            key: '6',
            label: `کویرئیز`,
            children: <TabPage title='کویرئیز' />,
        },
        {
            key: '7',
            label: `شخص ثالث`,
            children: <TabPage title='شخص ثالث' />,
        },
    ];


    return (
        <section className="content">
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
            {number}
        </section>
    )
}

export default Content;