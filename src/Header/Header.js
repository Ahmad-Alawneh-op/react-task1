import React from 'react';
import HeaderLink from './HeaderLink';

export default class Header extends React.Component {
	constructor(props) {
		super(props);

		this.state = { activeTabId: this.props.activeTabId };
		this.updateActiveTab = this.updateActiveTab.bind(this);
		this.tabs = [
			{ id: 'home', title: '00 HOME' },
			{ id: 'destination', title: '01 DESTINATION' },
			{ id: 'crew', title: '02 CREW' },
			{ id: 'technology', title: '03 TECHNOLOGY' },
		]
	}

	updateActiveTab(newTabId) {
		this.setState({activeTabId: newTabId});
		this.props.onTabChange(newTabId);
	}

	render() {
		return (
			<div className='header-items'>
				{this.tabs.map((tab, index) => (
					<HeaderLink
						activeTabId={this.state.activeTabId}
						clickCallback={this.updateActiveTab}
						tabId={tab.id}
						key={index}>{tab.title}</HeaderLink>
				))}
			</div>
		)
	}
}
