import TabPage from "./tabpageone";
import PageContext from './context';
import { useContext, useEffect, useState } from 'react';

function Content() {

    const [tab, setTab] = useState([]);
    const tabs = useContext(PageContext);


    useEffect(() => {
        let tab = [];
        console.log(tabs);
        tabs.forEach((item) => {
            tab.push({ key: item.id, label: item.label })
        });
        setTab(tab);
    }, [tabs]);

    const itemsone = [
        {
            key: 1,
            label: `تجهیزات`,
        },
        {
            key: 2,
            label: `مراکز عملیات امنیت`,
        },
        {
            key: 3,
            label: `جمع کننده ها`,
        },
        {
            key: 4,
            label: `حسگرها`,
        },
        {
            key: 5,
            label: `پویشگرها`,
        },
        {
            key: 6,
            label: `کویرئیز`,
        },
        {
            key: 7,
            label: `شخص ثالث`,
        },
    ];


    return (
        <>
            <TabPage items={tab} />
        </>
    )
}

export default Content;