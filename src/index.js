import React from "react";
import ReactDOM from "react-dom";
import "../src/styles/index.css";
import App from "./components/App";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: `${process.env.REACT_APP_GRAPHQL_ENDPOINT}`
});

//Apollo Client
ReactDOM.render(
  client && (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  ),
  document.getElementById("root")
);
