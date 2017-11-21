import React from 'react'
import { Component } from 'react'

import { Tab } from './tab'
import { Snippet } from './snippet'

export class InteractiveComponent extends React.Component {
	constructor(props) {
		super(props)
		this.state = { current: 0, copied: false }
	}
	handleClick(i) {
		this.setState({ current: i })
	}
	handleCopyClick() {
		this.setState({ copied: true })
		setTimeout(() => {
			this.setState({ copied: false })
		}, 3000)
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
							<div className="copy" onClick={() => {this.handleCopyClick()}}>
								<span className={`copied-message ${this.state.copied? 'copied' : ''}`}>Copied!</span>
								<span className="copy-icon"></span>
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
