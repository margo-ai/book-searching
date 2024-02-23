import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

import { Provider } from 'react-redux';

import store from './store';
import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Crimson Text', serif;
		font-size: 22px;
		color: #000;
	}
	a {
		text-decoration: none;
	}
	li {
		list-style: none;
	}
`;

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <Provider store={store}>
        <Global />
        <App />
    </Provider>
);
