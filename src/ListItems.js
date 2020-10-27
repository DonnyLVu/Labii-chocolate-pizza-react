import React, { Component } from 'react'

export default class ListItems extends React.Component {
    render() {
        return (
            <div className='ingredients'>
                <div>{this.props.caption}</div>
            </div>
        )
    }
}
