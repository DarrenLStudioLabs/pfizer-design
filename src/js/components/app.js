import React from 'react'
import { Component } from 'react'

import { InteractiveComponent } from './interactive'
import { config } from '../config'

export class App extends React.Component {
	constructor() {
		super()
	}
	render() {
		return (
			<div>
				{
					config.map((component, index) => {
						return (
							<InteractiveComponent
								key={index}
								name={component.name}
								tabs={component.tabs}
								interactive={component.interactive}/>
						)
					})
				}
			</div>
		)
	}

}
