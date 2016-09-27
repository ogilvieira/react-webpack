'use strict';

import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { render } from 'react-dom';
import App from './app';

const renderApp = (NextApp) => {
	render(
		<AppContainer>
			<NextApp />
		</AppContainer>,
		document.querySelector('[data-js="app"]')
	);
}
//render app in first time
renderApp(App);

if (module.hot) {
	//render app when code is update
	module.hot.accept('./app', () => {
		const NextApp = require('./app').default;
		renderApp(NextApp);
	});
}