import React from 'react';
import './App.css';
import NavigationBar from './NavigationBar';
import HeaderPart from './HeaderPart';
import CardList from './CardList';
import FooterSign from './FooterSign';
import FooterConnect from './FooterConnect';
import './Footer.css'

function App() {
  return (
    <div>
      <NavigationBar />
      <HeaderPart />
      <CardList />
      <div className="footerPart">
        <FooterSign />
        <FooterConnect />
      </div>
      
    </div>
  );
}

export default App;
