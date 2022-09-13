import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import "./index.css";
import App from "./App";

const client = new ApolloClient({
  uri: "https://graphql.i-plc.ru:30903/graphql",
  // uri: "http://138.201.182.147:30903/graphql",
  // uri: "http://138.201.182.147:30903",
  // uri: "http://138.201.182.147",
  credentials: "include",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>
);
