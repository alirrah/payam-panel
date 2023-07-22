import './App.css';
import SidebarMenu from './component/menu';
import Header from './component/header';
import Content from './component/content'
import { useState } from 'react';
import pageContext from "./component/context"

function App() {

  const [number, setNumber] = useState(1);

  return (
    <>
      <pageContext.Provider value={number}>
        <SidebarMenu number={number} changeNumber={(key) => {
          setNumber(key)
        }} />

        <section className='main'>
          <Header />
          <Content />
        </section>
      </pageContext.Provider>

    </>
  );
}

export default App;
