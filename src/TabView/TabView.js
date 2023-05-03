import React from 'react';
import TabLink from './TabLink';
import TabContent from './TabContent';


export default class TabView extends React.Component {
	constructor(props) {
		super(props);
		this.state = { activeTabId: this.props.activeTabId,  activeTabContent: this.props.tabs.find((tab) => tab.id === this.props.activeTabId).content };
		this.updateActiveTab = this.updateActiveTab.bind(this);
	}

	componentDidUpdate(prevProps) {
		if (prevProps.activeTabId !== this.props.activeTabId) {
			this.setState({ activeTabContent: this.props.tabs.find((tab) => tab.id === this.props.activeTabId).content, activeTabId: this.props.activeTabId });
		}
	}

	updateActiveTab(newTabId) {
		this.setState({ activeTabId: newTabId, activeTabContent: this.props.tabs.find((tab) => tab.id === newTabId).content });
		this.props.onTabUpdated(newTabId);
	}

	render() {
		return (
			<div className='tab-view-container'>
				<div className='tab-items'>
					{this.props.tabs.map((tab, index) => (
						<TabLink
							activeTabId={this.state.activeTabId}
							clickCallback={this.updateActiveTab}
							tabId={tab.id}
							key={index}>{tab.title}</TabLink>
					))}
				</div>
				<TabContent content={this.state.activeTabContent}></TabContent>
			</div>
		)
	}
}
