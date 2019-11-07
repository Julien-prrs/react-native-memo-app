import React from 'react'
import { View, TextInput, TouchableHighlight, AsyncStorage } from 'react-native'
import Editor from '../components/editor'
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles'

export default class NewItemScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    generateUniqueId() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    onTitleChange(title) {
        this.setState({
            title: title
        })
    }

    onContentChange(content) {
        this.setState({
            content: content
        })
    }

    onSave = async() => {
        const ID = this.generateUniqueId()
        const prevMemo = JSON.parse(await AsyncStorage.getItem('memos'))
        const newMemo = {
            [ID]: {
                id: ID,
                title: this.state.title,
                content: this.state.content,
                createdAt: Date.now()
            }
        }

        this.setState({
            memos: {
                ...prevMemo,
                ...newMemo
            }
        })

        this.persistMemos(this.state.memos);
    }

    persistMemos = async (memos) => {
        global.hasUpdate = true;
        await AsyncStorage.setItem('memos', JSON.stringify(memos));
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={styles.base.bodyNoheader}>
                <View style={styles.newItem.rowTitle}>
                    <TextInput style={styles.newItem.title} onChangeText={title => this.onTitleChange(title)} placeholder="Saisissez un titre" />
                    <View style={styles.newItem.headerContainerIcons}>
                        <TouchableHighlight underlayColor="#f5f5f5" style={styles.newItem.icnWrapper} onPress={() => this.onSave()}>
                            <Ionicons name="ios-checkmark" size={37} color="#2371eb" />
                        </TouchableHighlight>
                    </View>
                </View>
                <Editor parent={ this }/>
            </View>
        )
    }
}