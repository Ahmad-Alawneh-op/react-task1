import React from 'react';
import { Link } from 'react-router-dom';

export default class HeaderLink extends React.Component {
	constructor(props) {
		super(props);
		this.onPageUpdated = this.onPageUpdated.bind(this);
	}

	onPageUpdated() {
		this.props.onPageUpdated(this.props.pageId);
	}

	render() {
		return (
			<div className={'link-container ' + (this.props.pageId === this.props.activePageId ? 'link-active' : '')}>
				<Link to={`/${this.props.pageId}`}><button onClick={this.onPageUpdated}>{this.props.children}</button></Link>
			</div>
		)
	}
}
