import React from 'react'
import { View, Text } from 'react-native'
import styles from '../styles/components/memoItems.js'

export default class MemoItem extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = this.props.data;
    }

    render() {
        return (
            <View style={styles.item}>
                <Text style={styles.itemTitle}>{ this.state.title }</Text>
                <Text style={styles.itemExcerpt}>Content</Text>
            </View>
        )
    }
}