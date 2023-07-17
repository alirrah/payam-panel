import './App.css';
import SidebarMenu from './component/menu';
import Header from './component/header';
import Content from './component/content'

function App() {
  return (
    <>
      <SidebarMenu />
      <section className='main'>
        <Header />
        <Content />
      </section>
    </>
  );
}

export default App;
