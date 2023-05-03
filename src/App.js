import React from 'react';
import  Header from './Header/Header';
import {
	BrowserRouter,
	Route,
	Routes,
  } from "react-router-dom";
import HomePage from './HomePage';
import { pageData } from './pageData';
import Page from './Page';

const backgroundByTab = {
	home: 'https://space-tourism-multi-page-solution.netlify.app/images/cdf3864ecbfdf20e8c3b.jpg',
	destination: 'https://space-tourism-multi-page-solution.netlify.app/images/468b922c69bf5499b4bc.jpg',
	crew: 'https://space-tourism-multi-page-solution.netlify.app/images/88a3c692fd34eb311e04.jpg',
	technology: 'https://space-tourism-multi-page-solution.netlify.app/images/b7b589b3c0c5ef0811d4.jpg',
}

const routeData = [
	{
		path: '/',
		element: <HomePage content={pageData.home}></HomePage>,
	},
	{
		path: '/home',
		element: <HomePage content={pageData.home}></HomePage>,
	},
	{
		path: '/destination',
		element: <Page content={pageData.destination} pageId='destination'></Page>,
	},
	{
		path: '/crew',
		element: <Page content={pageData.crew} pageId='crew'></Page>,
	},
	{
		path: '/technology',
		element: <Page content={pageData.technology} pageId='technology'></Page>,
	},
]

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { activeTabId: 'home' };
		this.onTabChange = this.onTabChange.bind(this);
	}

	onTabChange(newTabId) {
		this.setState({ activeTabId: newTabId });
	}

	render() {
		return (
			<>
				<div className='background-container' style={{ backgroundImage: `url(${backgroundByTab[this.state.activeTabId]})` }}></div>
				<div className='main-container'>
					<BrowserRouter>
						<div className='header-container'>
							<Header activeTabId={this.state.activeTabId} onTabChange={this.onTabChange}></Header>
						</div>
						<Routes>
							{routeData.map((route, index) => (
								<Route path={route.path} element={route.element} key={index}></Route>
							))}
						</Routes>
					</BrowserRouter>
				</div>
			</>
		);
	}
}

export default App;
