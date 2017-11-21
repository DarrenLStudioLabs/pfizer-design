import React from 'react'
import { Component } from 'react'

import { Tab } from './tab'
import { Snippet } from './snippet'

export class InteractiveComponent extends React.Component {
	constructor(props) {
		super(props)
		this.state = { current: 0 }
	}
	handleClick(i) {
		this.setState({ current: i })
	}
	render() {
		return (
			<div>
				<h1>{ this.props.name }</h1>
				<div className="container">
					<div className="snippet">
						<div className="tabs">
							{
								this.props.tabs.map((tab, index) => {
									return (
										<Tab
											name={tab.tab}
											id={index}
											key={index}
											onClick={(i) => this.handleClick(i)}
											current={this.state.current} />
									)
								})
							}
							<div className="copy">
								<span>Copy to Clipboard</span>
							</div>
						</div>
						<div className="codes">
							{
								this.props.tabs.map((tab, index) => {
									return (
										<Snippet
											contents={tab.content}
											id={index}
											key={index}
											current={this.state.current} />
									)
								})
							}
						</div>
					</div>
					<div className="interactive">
						{ this.props.interactive }
					</div>
				</div>
			</div>
		)
	}
}
