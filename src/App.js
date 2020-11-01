import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import Jobs from './components/Jobs'

function App() {
  const client = new ApolloClient({
    uri: 'https://api.graphql.jobs/'
  });
  return (
    <ApolloProvider client={client}>
      <>
        <Jobs />
      </>
    </ApolloProvider>
  )
}

export default App
