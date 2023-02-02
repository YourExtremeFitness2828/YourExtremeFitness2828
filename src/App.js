import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MainLayout } from './Components/Layout';
import OnePageWebSite from './Pages/OnePageWebSite/OnePageWebSite';

function App() {
  return (
    <Router>
      <Switch>
        <MainLayout>
          <OnePageWebSite></OnePageWebSite>
        </MainLayout>
      </Switch>
    </Router>
  );
}

export default App;
