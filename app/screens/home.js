import React from 'react'
import { View, Button, TouchableHighlight } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import styles from '../styles/index.js'

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Vos notes',
    };

    goTo(screenName) {
        const navigation = this.props.navigation;
        navigation.navigate(screenName);
    }

    render() {
        return (
            <View style={styles.base.body}>
                <TouchableHighlight style={styles.base.btnFixed} underlayColor="white" onPress={this.goTo.bind(this, 'NewItem')}>
                    <Ionicons name="ios-add" size={32} color="#2371eb" />
                </TouchableHighlight>
            </View>
        )
    }
}