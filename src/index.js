import React from "react";
import ReactDOM from "react-dom";
import "../src/styles/index.css";
import App from "../src/components/App";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: `${process.env.REACT_APP_GRAPHQL_ENDPOINT}`
});

console.log(client);
//Apollo Client
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
