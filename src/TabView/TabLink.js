import React from 'react';

export default class TabLink extends React.Component {
	constructor(props) {
		super(props);
		this.clickCallback = this.clickCallback.bind(this);
	}

	clickCallback() {
		this.props.clickCallback?.(this.props.tabId);
	}

	render() {
		return (
			<div className={'link-container ' + (this.props.tabId === this.props.activeTabId ? 'link-active' : '')}>
				<button onClick={this.clickCallback}>{this.props.children}</button>
			</div>
		)
	}
}
