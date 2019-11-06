import { registerRootComponent } from 'expo'
import React from 'react'
import Router from './config/router'

class App extends React.Component {
    render() {
        return (
            <Router/>
        )
    }
}

export default registerRootComponent(App);