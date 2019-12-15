import React from "react";
import ReactDOM from "react-dom";
import "../src/styles/index.css";
import App from "./components/App";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

console.log(process.env);

const client = new ApolloClient({
  uri: "https://coughfee-magikarp.herokuapp.com/graphql"
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
