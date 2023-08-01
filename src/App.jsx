import './App.css';
import SidebarMenu from './component/menu';
import Header from './component/header';
import Content from './component/content'
import { useState } from 'react';
import pageContext from "./component/context";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const [number, setNumber] = useState(1);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={
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
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
