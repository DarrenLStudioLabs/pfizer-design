import React from 'react'
import { Component } from 'react'

export class Snippet extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div className={this.props.current==this.props.id? 'code show': 'code hide'}>
				{ this.props.contents }
			</div>
		)
	}
}
