import React from 'react'
import { View, Keyboard, TouchableWithoutFeedback, Text, KeyboardAvoidingView } from 'react-native'
import CNRichTextEditor, { CNToolbar, getInitialObject, getDefaultStyles } from "react-native-cn-richtext-editor"
import { Ionicons } from '@expo/vector-icons'
import styles from '../styles/components/editor.js'

const defaultStyles = getDefaultStyles();

export default class Editor extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            selectedTag : 'body',
            selectedStyles : [],
            value: [getInitialObject()]
        };

        this.editor = null;
    }

    onStyleKeyPress = (toolType) => {
        this.editor.applyToolbar(toolType);
    }

    onSelectedTagChanged = (tag) => {
        this.setState({
            selectedTag: tag
        })
    }

    onSelectedStyleChanged = (styles) => { 
        this.setState({
            selectedStyles: styles,
        })
    }

    onValueChanged = (value) => {
        this.setState({
            value: value
        });
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} >             
                    <View style={styles.main}>
                        <CNRichTextEditor
                            ref={input => this.editor = input}
                            onSelectedTagChanged={this.onSelectedTagChanged}
                            onSelectedStyleChanged={this.onSelectedStyleChanged}
                            value={this.state.value}
                            style={styles.editor}
                            textInputStyle={styles.editorContent}
                            styleList={defaultStyles}
                            onValueChanged={this.onValueChanged}
                            placeholder="Votre contenu ici ..."
                        />
                    </View>
                </TouchableWithoutFeedback>
                <CNToolbar
                    style={styles.toolbar}
                    iconSetContainerStyle={{
                        flexGrow: 1,
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                    }}
                    size={30}
                    iconSet={[
                        {
                            type: 'tool',
                            iconArray: [{
                                toolTypeText: 'bold',
                                buttonTypes: 'style',
                                iconComponent: <Text style={styles.toolbarButton}>bold</Text>
                            }]
                        },
                        {
                            type: 'seperator'
                        },
                        {
                            type: 'tool',
                            iconArray: [
                                {
                                    toolTypeText: 'text',
                                    buttonTypes: 'tag',
                                    iconComponent: <View style={styles.editorIcon}><Ionicons name="ios-add" size={25} color="#2371eb"/></View>
                                },
                            ]
                        },
                        {
                            type: 'tool',
                            iconArray: [
                                {
                                    toolTypeText: 'ul',
                                    buttonTypes: 'tag',
                                    iconComponent: <Text style={styles.toolbarButton}>ul</Text>
                                }
                            ]
                        },
                        {
                            type: 'tool',
                            iconArray: [
                                {
                                    toolTypeText: 'ol',
                                    buttonTypes: 'tag',
                                    iconComponent: <Text style={styles.toolbarButton}>ol</Text>
                                }
                            ]
                        },
                    ]}
                    selectedTag={this.state.selectedTag}
                    selectedStyles={this.state.selectedStyles}
                    onStyleKeyPress={this.onStyleKeyPress}
                />
            </KeyboardAvoidingView>
        );
    }
}