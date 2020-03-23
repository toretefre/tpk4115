import React, { Suspense, lazy } from 'react';
import { Router } from '@reach/router';
import { Navbar, Header } from './components';
import './App.css';

const LandingPage = lazy(() => import('./containers/LandingPage'));
const Quiz = lazy(() => import('./containers/QuizPage'));
const Omoss = lazy(() => import('./containers/OmossPage'));

export const App = () => {
  return (
    <Suspense fallback={<h1>Laster...</h1>}>
      <Header />
      <Navbar />
      <Router>
        <LandingPage path="/" />
        <Quiz path="/quiz" />
        <Omoss path="/omoss" />
      </Router>
    </Suspense>
  );
}

export default App;
