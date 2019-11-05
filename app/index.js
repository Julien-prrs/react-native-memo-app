import { registerRootComponent } from 'expo'
import React from 'react'
import Navigation from './config/router'

class App extends React.Component {
    render() {
        return (
            <Navigation/>
        )
    }
}

export default registerRootComponent(App);