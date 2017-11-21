import React from 'react'

export const navigation =
  <div>
    <label>BASIC NAVIGATION</label>
    <ul className="navigation basic">
      <li><a href="#">Link 1</a></li>
      <li><a href="#">Link 2</a></li>
      <li><a href="#">Link 3</a></li>
      <li><a href="#">Link 4</a></li>
    </ul>
    <label>DROPDOWN NAVIGATION</label>
    <ul className="navigation">
      <li><a href="#">Link 1</a>
        <ul className="nav-menu">
          <li><a href="#">Sub Link 1</a></li>
          <li><a href="#">Sub Link 2</a></li>
          <li><a href="#">Sub Link 3</a></li>
        </ul>
      </li>
      <li><a href="#">Link 2</a></li>
      <li><a href="#">Link 3</a>
        <ul className="nav-menu">
          <li><a href="#">Sub Link 1</a></li>
          <li><a href="#">Sub Link 2</a></li>
        </ul>
      </li>
      <li><a href="#">Link 4</a></li>
      <li className="search">
        <input type="checkbox"/>
        <div className="search-icon"></div>
        <div className="searchbar">
          <input type="text" placeholder="Search"/>
        </div>
        <div className="close-icon"></div>
      </li>
    </ul>
  </div>
