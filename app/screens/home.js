import React from 'react'
import { View, TouchableHighlight, AsyncStorage, FlatList } from 'react-native'
import MemoItem from '../components/memoItem.js'
import { Ionicons } from '@expo/vector-icons'
import styles from '../styles/index.js'
import _values from 'lodash.values'

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props)

        global.hasUpdate = true;

        this.state = { memos: [] }
        this.flatListMemo = null;

        this.bindEvents();
    }

    static navigationOptions = {
        title: 'Vos notes',
    };

    componentDidUpdate() {
        this.flatListMemo.scrollToOffset({
            animated: false,
            y: 0
        });
    }

    onWillFocus = () => {
        // this.clearMemos();
        if (global.hasUpdate) {
            global.hasUpdate = false;
            this.loadMemos()
        }
    }

    onPressNew = () => {
        this.props.navigation.navigate('NewItem')
    }

    loadMemos = async () => {
        const memosObject = JSON.parse(await AsyncStorage.getItem('memos'));
        const memo = _values(memosObject).reverse() || [];

        this.setState({ memos: null })
        this.setState({ memos: memo })
    }

    clearMemos() {
        AsyncStorage.removeItem('memos', () => {
            console.log('AsyncStorage cleared')
        });
    }

    bindEvents() {
        this.props.navigation.addListener('willFocus', this.onWillFocus)
    }

    render() {
        return (
            <View style={styles.base.body}>
                <FlatList
                    ref={(ref) => { this.flatListMemo = ref; }}
                    data={this.state.memos}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={(item, index) => <MemoItem data={item.item}/>}
                />
                <TouchableHighlight style={styles.base.btnFixed} underlayColor="white" onPress={this.onPressNew}>
                    <Ionicons name="ios-add" size={32} color="#2371eb" />
                </TouchableHighlight>
            </View>
        )
    }
}