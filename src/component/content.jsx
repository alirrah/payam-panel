import TabPage from "./tabpageone";
import PageContext from './context';
import { useContext, useEffect, useState } from 'react';

function Content() {

    const [tab, setTab] = useState([]);
    const tabs = useContext(PageContext);

    useEffect(() => {
        let tab = [];
        tabs.tabs.forEach((item) => {
            tab.push({ key: item.id, label: item.label })
        });
        setTab(tab);
    }, [tabs]);

    return (
        <TabPage items={tab} inital={tabs.inital} />
    )
}

export default Content;