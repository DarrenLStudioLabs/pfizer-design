import React from 'react'

// Import JSX for interactive components
import { buttons } from './interactive/buttons'
import { fields } from './interactive/fields'
import { navigation } from './interactive/navigation'

const buttonComponent = `
	button {
		align-items: center;
		background: #0064C0;
		border: 2px solid #0064C0;
		border-radius: 5px;
		color: white;
		cursor: pointer;
		display: flex;
		font-family: $main-font;
		font-size: 16px;
		height: 60px;
		justify-content: center;
		transition: all .3s ease;
		width: 200px;
		&:hover {
			background: none;
			color: #0064C0;
		}
	}
`

export const config = [
	{
		name: 'Buttons',
		tabs: [
			{
				tab: 'SCSS',
				content: buttonComponent
			},
			{
				tab: 'Sass',
				content: 'More code...'
			}
		],
		interactive: buttons
	},
	{
		name: 'Fields',
		tabs: [
			{
				tab: 'SCSS',
				content: 'Some code here...'
			},
			{
				tab: 'Sass',
				content: 'More code...'
			}
		],
		interactive: fields

	},
	{
		name: 'Navigation',
		tabs: [
			{
				tab: 'SCSS',
				content: 'Some code here...'
			},
			{
				tab: 'Sass',
				content: 'More code...'
			}
		],
		interactive: navigation

	}
]
