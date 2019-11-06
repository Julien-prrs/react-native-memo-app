import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#f2f3f7',
        padding: 20
    },
    bodyNoheader: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 25,
    },
    viewTitle: {
        fontSize: 20,
        fontWeight: '700'
    },
    btnFixed: {
        position: 'absolute',
        width: 60,
        height: 60,
        right: 25,
        bottom: 25,
        backgroundColor: 'white',
        borderRadius: 50,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
    },
});