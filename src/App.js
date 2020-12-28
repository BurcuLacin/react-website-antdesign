import React from 'react';
import './App.css';
import 'antd/dist/antd.css';

import AppHeader from './components/common/Header';
import AppFooter from './components/common/Footer';
import AppHome from './components/views/Home';

import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader/>
      </Header>
      <Content>
        <AppHome/>
      </Content>
      <Footer>
        <AppFooter/>  
      </Footer>      
    </Layout>
  );
}

export default App;
