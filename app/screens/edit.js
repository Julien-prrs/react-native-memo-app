import React from 'react'
import { View, TextInput, TouchableHighlight, AsyncStorage } from 'react-native'
import Editor from '../components/editor'
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles'

export default class EditScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    state = {
        id: '',
        title: '',
        content: [],
        createdAt: ''
    }

    componentDidMount() {
        const id = this.props.navigation.getParam('id', null);

        if (id) {
            this.getMemosFromStorage().then(memos => {
                const currentMemo = memos.filter(memo => memo.id === id )

                this.props.memos = memos;
                this.setState(...currentMemo)

                console.log(this.state.content)
            }); 
        } else {
            // If param id is null
            // 1. Generate uniqueID
            // 2. Create new memo state
        }
    }

    getMemosFromStorage = async() => {
        return JSON.parse(await AsyncStorage.getItem('memos'));
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

    onSave = () => {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={styles.base.bodyNoheader}>
                <View style={styles.newItem.rowTitle}>
                    <TextInput style={styles.newItem.title} value={this.state.title} onChangeText={title => this.onTitleChange(title)} placeholder="Saisissez un titre" />
                    <View style={styles.newItem.headerContainerIcons}>
                        <TouchableHighlight underlayColor="#f5f5f5" style={styles.newItem.icnWrapper} onPress={() => this.onSave()}>
                            <Ionicons name="ios-checkmark" size={37} color="#2371eb" />
                        </TouchableHighlight>
                    </View>
                </View>
                <Editor parent={this} />
            </View>
        )
    }
}