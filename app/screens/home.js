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
        headerStyle: {
            backgroundColor: '#2371eb',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    componentDidUpdate() {
        this.flatListMemo.scrollToOffset({
            animated: true,
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

    onDeleteItem = async(id) => {
        const filtered = this.state.memos.filter((el) => { return el.id !== id })
        await AsyncStorage.setItem('memos', JSON.stringify(filtered.reverse()));
        
        this.setState({ memos: filtered });
    }

    loadMemos = async () => {
        const memosObject = JSON.parse(await AsyncStorage.getItem('memos'));
        const memo = _values(memosObject).reverse() || [];

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
                    contentContainerStyle={styles.base.list}
                    ref={(ref) => { this.flatListMemo = ref; }}
                    data={this.state.memos}
                    extraData={this.state}
                    keyExtractor={(item, index) => item.id}
                    renderItem={(item, index) => <MemoItem onDelete={this.onDeleteItem} data={item.item}/>}
                />
                <TouchableHighlight style={styles.base.btnFixed} underlayColor="#2371eb" onPress={this.onPressNew}>
                    <Ionicons name="ios-add" size={32} color="white" />
                </TouchableHighlight>
            </View>
        )
    }
}