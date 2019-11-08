import React from 'react'
import { View, Text } from 'react-native'
import Swipeout from 'react-native-swipeout'
import styles from '../styles/components/memoItems.js'
import { Ionicons } from '@expo/vector-icons'

export default class MemoItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.data;
    }

    swipeoutBtns = [{
        backgroundColor: '#f7f8fc',
        underlayColor: '#f7f8fc',
        component: <View style={styles.btnDelete}><Ionicons name="ios-trash" size={30} color="#f04a3e" /><Text style={styles.btnLabel}>Supprimer</Text></View>,
        type: 'delete',
        onPress: () => {
            this.onPressDelete();
        },
        
    }]
    
    componentDidMount() {
        this.setExcerpt();
    }

    onPressDelete = () => {
        this.props.onDelete(this.state.id);
    }

    setExcerpt() {
        var tagsContent = [];

        for (const key in this.state['content']) {
            for (const subKey in this.state['content'][key].content) {
                const el = this.state['content'][key].content[subKey];
                tagsContent.push(el.text);
            }
        }

        this.setState({
            excerpt: tagsContent.join('').substring(0, 40) + '...'
        })
    }

    render() {
        return (
            <Swipeout style={styles.itemWrapper} sensitivity={100} buttonWidth={100} autoClose={true} right={this.swipeoutBtns}>
                <View style={styles.item}>
                    <Text style={styles.itemTitle}>{ this.state.title || 'Sans titre' }</Text>
                    <Text style={styles.itemExcerpt}>{ this.state.excerpt }</Text>
                </View>
            </Swipeout>
        )
    }
}