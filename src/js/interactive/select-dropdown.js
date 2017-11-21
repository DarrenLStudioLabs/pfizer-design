import React from 'react'
import { Cmoponent } from 'react'

export class SelectDropdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: null,
      opened: false
    }
  }
  handleToggleClick() {
    this.setState({ opened: !this.state.opened })
  }
  handleSelectionClick(i) {
    this.setState({ current: i })
  }
  render() {
    return (
      <div className={`select-dropdown ${this.state.opened? 'show' : ''}`}>
        <div
          className="select-container"
          onClick={() => this.handleToggleClick()}>
          <div className={`select-selected ${this.state.current===null? 'default' : ''}`}>
            {
              `${this.state.current===null? 'Select Country' : selection[this.state.current]}`
            }
          </div>
        </div>
        <ul className="select-selection">
          {
            selection.map((option, i) => {
              return (
                <li
                  onClick={() => {
                      this.handleSelectionClick(i)
                      this.handleToggleClick()
                    }
                  } key={i} className={this.state.current===i? 'selected': ''}>
                  { option }
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

const selection = [
  "United States",
  "Canada",
  "Option"
]
