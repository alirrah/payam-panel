import { Breadcrumb, Button, Tabs } from 'antd';
import { PlusOutlined, ReloadOutlined, DownloadOutlined, SaveOutlined, FilterOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';

function TabPage(props) {

    const [title, setTitle] = useState('');
    const [actived, setActived] = useState('');

    useEffect(() => {
        setTitle(props.inital.label);
        setActived(props.inital.id);
    }, [props]);


    const onChange = (key) => {
        props.items.forEach((item) => {
            if (item.key === key) {
                setTitle(item.label)
                setActived(item.key)
            }
        })
    };

    return (
        <section className="content">
            <Tabs activeKey={actived} items={props.items} onChange={onChange} />

            <section className="tabPage" >
                <h1>{title}</h1>
                <Breadcrumb
                    separator=">"
                    items={[
                        {
                            title: 'پایگاه دانش',
                        },
                        {
                            title: 'قوانین تحلیل',
                            href: '',
                        },
                        {
                            title: 'قوانین وارسی',
                            href: '',
                        },
                    ]}
                />

                <Button className='btn spacer square'>
                    <SaveOutlined />
                </Button>
                <Button className='btn square'>
                    <FilterOutlined />
                </Button>
                <Button className='btn square'>
                    <DownloadOutlined />
                </Button>
                <Button className='btn square'>
                    <ReloadOutlined />
                </Button>
                <Button type="primary" className='btn primaryBtn'>
                    <PlusOutlined />
                    افزودن آیتم
                </Button>
            </section>

        </section>
    )
}

export default TabPage;