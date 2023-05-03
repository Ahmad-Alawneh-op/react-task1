import React from 'react';

export default class TabContent extends React.Component {
    render() {
        return (
            <div className='tab-content-container'>
                {this.props.content?.headline && <div className='tab-content-headline'>{this.props.content.headline}</div>}
                {this.props.content?.header && <div className='tab-content-header'>{this.props.content.header}</div>}
                {this.props.content?.text && <div className='tab-content-text'>{this.props.content.text}</div>}
            </div>
        );
    }
}
