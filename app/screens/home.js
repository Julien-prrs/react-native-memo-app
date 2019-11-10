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

        this.flatListMemo = null;
        this.state = { memos: [] }

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

    onPressOpen = (id) => {
        this.props.navigation.navigate('Edit', {id: id})
    }

    onPressDelete = async(id) => {
        const memosFiltered = this.state.memos.filter((el) => { return el.id !== id })
        await AsyncStorage.setItem('memos', JSON.stringify(memosFiltered));

        this.setState({ memos: memosFiltered });
    }

    loadMemos = async () => {
        const memosObject = JSON.parse(await AsyncStorage.getItem('memos'));
        const memos = _values(memosObject) || [];
        const memosSorted = memos.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)); 

        this.setState({ memos: memosSorted })
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
                    extraData={this.state.memos}
                    keyExtractor={(item, index) => item.id}
                    renderItem={(item, index) => <MemoItem onOpen={this.onPressOpen} onDelete={this.onPressDelete} data={item.item} /> }
                />
                <TouchableHighlight style={styles.base.btnFixed} underlayColor="#2371eb" onPress={this.onPressNew}>
                    <Ionicons name="ios-add" size={32} color="white" />
                </TouchableHighlight>
            </View>
        )
    }
}