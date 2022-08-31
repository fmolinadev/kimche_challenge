import React from 'react';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Error from './pages/Error';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/',
  cache: new InMemoryCache()
});

const App = () => (
  <ApolloProvider client={client}>
    <>
      <GlobalStyles />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  </ApolloProvider>
);
export default App;
