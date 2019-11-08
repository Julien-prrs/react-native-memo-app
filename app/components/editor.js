import React from 'react'
import { View, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, Image } from 'react-native'
import CNRichTextEditor, { CNToolbar, getInitialObject, getDefaultStyles } from "react-native-cn-richtext-editor"
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

        console.log(this.props.parent.state.content);

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
        this.props.parent.onContentChange(value);
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
                            value={this.props.parent.state.content}
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
                    iconSetContainerStyle={styles.toolbarContainerIcon}
                    selectedBackgroundColor='#f5f5f5'
                    iconSet={[
                        {
                            type: 'tool',
                            iconArray: [{
                                toolTypeText: 'bold',
                                buttonTypes: 'style',
                                iconComponent: <View style={styles.toolbarIcon}><Image style={styles.toolbarIconImage} source={require('../assets/images/icn-editor__bold.png')} /></View>
                            }]
                        },
                        {
                            type: 'seperator'
                        },
                        {
                            type: 'tool',
                            iconArray: [
                                {
                                    toolTypeText: 'body',
                                    buttonTypes: 'tag',
                                    iconComponent: <View style={styles.toolbarIcon}><Image style={styles.toolbarIconImage} source={require('../assets/images/icn-editor__text.png')} /></View>
                                },
                            ]
                        },
                        {
                            type: 'tool',
                            iconArray: [
                                {
                                    toolTypeText: 'ul',
                                    buttonTypes: 'tag',
                                    iconComponent: <View style={styles.toolbarIcon}><Image style={styles.toolbarIconImage} source={require('../assets/images/icn-editor__ul.png')} /></View>
                                }
                            ]
                        },
                        {
                            type: 'tool',
                            iconArray: [
                                {
                                    toolTypeText: 'ol',
                                    buttonTypes: 'tag',
                                    iconComponent: <View style={styles.toolbarIcon}><Image style={styles.toolbarIconImage} source={require('../assets/images/icn-editor__ol.png')} /></View>
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