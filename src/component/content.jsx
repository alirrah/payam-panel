import TabPage from "./tabpageone";
import PageContext from './context';
import { useContext } from 'react';

function Content() {

    const number = useContext(PageContext);
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

    const itemstwo = [
        {
            key: 1,
            label: 'تست نویسی',
        },
        {
            key: 2,
            label: 'گزارش گیری',
        },
    ];

    return (
        <>
            {number === 1 ?
                <TabPage items={itemsone} /> :
                <TabPage items={itemstwo} />
            }
        </>
    )
}

export default Content;