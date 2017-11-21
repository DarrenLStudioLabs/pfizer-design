import React from 'react'

import { SelectDropdown } from './select-dropdown'

export const fields =
  <div className="columns">
    <div className="column">
      <div className="row">
        <label>FIELD</label>
        <label className="field-label"></label>
        <input type="text" placeholder="Entry" />
      </div>
      <div className="row">
        <label>FIELD WITH LABEL</label>
        <label className="field-label">Name</label>
        <input type="text"/>
      </div>
      <div className="row">
        <label>SIGN IN FIELDS</label>
        <label className="field-label"></label>
        <input className="sign-in-field username" type="text" placeholder="Username" />
        <input className="sign-in-field password" type="text" placeholder="Password" />
      </div>
    </div>
    <div className="column">
      <div className="row">
        <label>DROPDOWN</label>
        <label className="field-label"></label>
        <select>
          <option value="" disabled selected>Select Country</option>
          <option value="option 1">Option 1</option>
          <option value="option 2">Option 2</option>
          <option value="option 3">Option 3</option>
          <option value="option 4">Option 4</option>
        </select>
      </div>
      <div className="row">
        <label>CUSTOM DROPDOWN</label>
        <label className="field-label"></label>
        <SelectDropdown />
      </div>
    </div>
  </div>
