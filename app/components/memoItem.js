import React from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
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
        component: <View style={styles.btnAction}><Ionicons name="ios-trash" size={30} color="#f04a3e" /><Text style={styles.btnLabel}>Supprimer</Text></View>,
        type: 'delete',
        onPress: () => {
            this.onPressDelete();
        },
    }]
    
    componentDidMount() {
        this.setExcerpt();
    }

    onPressOpen = () => {
        this.props.onOpen(this.state.id);
    }

    onPressDelete = () => {
        this.props.onDelete(this.state.id);
    }

    setExcerpt() {
        var output = [];

        for (const key in this.state['content']) {
            for (const subKey in this.state['content'][key].content) {
                const el = this.state['content'][key].content[subKey];
                output.push(el.text);
            }
        }

        output = output.join('');

        this.setState({
            excerpt: output.length > 40 ? output.substring(0, 40) + '...' : output
        })
    }

    render() {
        return (
            <Swipeout style={styles.itemWrapper} buttonWidth={100} autoClose={true} right={this.swipeoutBtns}>
                <TouchableWithoutFeedback onPress={() => this.onPressOpen()}>
                    <View style={styles.item}>
                        <Text style={this.state.title ? styles.itemTitle : [styles.itemTitle, styles.itemTitleUnset]}>{ this.state.title || 'Sans titre' }</Text>
                        <Text style={styles.itemExcerpt}>{ this.state.excerpt }</Text>
                    </View>
                </TouchableWithoutFeedback>
            </Swipeout>
        )
    }
}