import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  createClient,
  Provider,
  subscriptionExchange,
  defaultExchanges,
} from 'urql';
import { createClient as createWSClient } from 'graphql-ws';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container);

const wsClient = createWSClient({
  url: 'ws://localhost:3001/graphql',
});

const client = createClient({
  url: 'http://localhost:3001/graphql',
  exchanges: [
    ...defaultExchanges,
    subscriptionExchange({
      forwardSubscription: operation => ({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        subscribe: (sink: any) => ({
          unsubscribe: wsClient.subscribe(operation, sink),
        }),
      }),
    }),
  ],
});

root.render(
  <React.StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </React.StrictMode>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
