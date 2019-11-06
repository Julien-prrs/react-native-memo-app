import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    main: {
        flex: 1,
        paddingLeft: 5,
        paddingRight: 5,
        alignItems: 'stretch',
    },
    editor: {
        backgroundColor: '#f8f9fa',
    },
    editorContent: {
        fontSize: 16
    },
    editorIcon: {
        width: 25,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    toolbar: {
        padding: 5,
        borderRadius: 0,
        height: 45
    },
    toolbarButton: {
        fontSize: 20,
        color: 'black',
        width: 28,
        height: 28,
        textAlign: 'center'
    },
    italicButton: {
        fontStyle: 'italic'
    },
    boldButton: {
        fontWeight: 'bold'
    },
    underlineButton: {
        textDecorationLine: 'underline'
    },
    lineThroughButton: {
        textDecorationLine: 'line-through'
    },
});