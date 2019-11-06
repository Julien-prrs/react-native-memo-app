import React from 'react'
import { View, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Editor from '../components/editor'
import styles from '../styles'

export default class NewItemScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={styles.base.bodyNoheader}>
                <View style={styles.newItem.rowTitle}>
                    <TextInput style={styles.newItem.title} placeholder="Saisissez un titre" />
                    <View style={styles.newItem.headerContainerIcons}>
                        <View style={[styles.newItem.icnWrapper, styles.newItem.icnWrapperFirst]}>
                            <Ionicons name="ios-close" size={37} color="#f54c4c" />
                        </View>
                        <View style={styles.newItem.icnWrapper}>
                            <Ionicons name="ios-checkmark" size={37} color="#2371eb" />
                        </View>
                    </View>
                </View>
                <Editor/>
            </View>
        )
    }
}