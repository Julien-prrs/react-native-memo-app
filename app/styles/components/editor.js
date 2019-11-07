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
    toolbar: {
        padding: 5,
        borderRadius: 0,
        justifyContent: 'flex-start'
    },
    toolbarContainerIcon: {
        paddingLeft: 10,
        paddingRight: 10
    },
    toolbarIcon: {
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },
    toolbarIconImage: {
        width: 30,
        height: 30
    },
});