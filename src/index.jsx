import React from 'react'
import ReactDOM  from 'react-dom'
import HomeComponent from './home_component.jsx'
import {Provider} from 'react-redux'
import store from './store/app_store'

const root = document.querySelector('#root')
ReactDOM.render(<Provider store={store}><HomeComponent/></Provider>, root);
