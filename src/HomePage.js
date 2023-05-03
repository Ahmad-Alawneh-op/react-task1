import React from 'react';
import TabContent from './TabView/TabContent';

export default class HomePage extends React.Component {
    render() {
        return (
            <div className='page-content-container'>
                <TabContent content={this.props.content}></TabContent>
            </div>
        );
    }
}
