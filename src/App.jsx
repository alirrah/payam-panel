import './App.css';
import SidebarMenu from './component/menu';
import Header from './component/header';
import Content from './component/content'
import { useState } from 'react';
import pageContext from "./component/context";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const [tab, setTab] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={
          <>
            <pageContext.Provider value={{"tabs": tab, "inital": (tab[0] === undefined) ? {label: "", key:""} : tab[0]}}>
              <SidebarMenu changeNumber={(tab) => {
                setTab(tab);
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
