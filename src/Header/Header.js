import React from 'react';
import HeaderLink from './HeaderLink';

const pageLinks = [
	{ id: 'home', title: '00 HOME' },
	{ id: 'destination', title: '01 DESTINATION' },
	{ id: 'crew', title: '02 CREW' },
	{ id: 'technology', title: '03 TECHNOLOGY' },
];

export default class Header extends React.Component {
	constructor(props) {
		super(props);

		this.state = { activePageId: this.props.activePageId };
		this.updateActivePage = this.updateActivePage.bind(this);
	}

	updateActivePage(newPageId) {
		this.setState({activePageId: newPageId});
		this.props.onTabChange(newPageId);
	}

	render() {
		return (
			<div className='header-items'>
				{pageLinks.map((page, index) => (
					<HeaderLink
						activePageId={this.state.activePageId}
						clickCallback={this.updateActivePage}
						pageId={page.id}
						key={index}>{page.title}</HeaderLink>
				))}
			</div>
		)
	}
}
