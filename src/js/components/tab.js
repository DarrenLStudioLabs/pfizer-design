import React from 'react'
import { Component } from 'react'

export class Tab extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div
				className={this.props.current==this.props.id? 'tab active': 'tab'}
				onClick={() => this.props.onClick(this.props.id)}>
				{ this.props.name }
			</div>
		)
	}
}
