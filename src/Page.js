import React from 'react';
import TabView from './TabView/TabView';

const defaultTabIdByPageId = {
	destination: 'moon',
	crew: 'person1',
	technology: 'technology1',
}

export default class Page extends React.Component {
	constructor(props) {
		super(props);
		this.state = { activePageId: this.props.pageId, activeTabId: defaultTabIdByPageId[this.props.pageId] };
		this.updateActiveTab = this.updateActiveTab.bind(this);
	}

	updateActiveTab(newTabId) {
		this.setState({ activeTabId: newTabId });
	}

	componentDidUpdate(prevProps) {
		if (prevProps.pageId !== this.props.pageId) {
			this.setState({ activePageId: this.props.tabId, activeTabId:  defaultTabIdByPageId[this.props.pageId]})
		}
	}

	render() {
		return (
			<div className='page-content-container'>
				<div className='page-title'>{this.props.content.pageTitle}</div>
				<div className='page-content-lower-section'>
					<TabView onTabUpdated={this.updateActiveTab} tabs={this.props.content.tabs} activeTabId={this.state.activeTabId}></TabView>
					<img className='image' src={this.props.content.images[this.state.activeTabId]} alt=''/>
				</div>
			</div>
		)
	}
}