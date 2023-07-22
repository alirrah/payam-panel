import { Breadcrumb, Button } from 'antd';
import { PlusOutlined, ReloadOutlined, DownloadOutlined, SaveOutlined, FilterOutlined } from '@ant-design/icons';


function TabPage({title}) {
    return (
        <section className="tabPage">
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
    )
}

export default TabPage;