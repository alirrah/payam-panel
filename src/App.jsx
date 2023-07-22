import './App.css';
import SidebarMenu from './component/menu';
import Header from './component/header';
import Content from './component/content'
import { useState, createContext, useContext } from 'react';


function App() {

  const [number, setNumber] = useState(1);

  return (
    <>
      <SidebarMenu context={(number) => {
        setNumber(number)
      }} />
      <section className='main'>
        <Header />
        <Content UserContext />
      </section>
    </>
  );
}

export default App;
