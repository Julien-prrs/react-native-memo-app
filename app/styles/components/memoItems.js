import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    itemWrapper: {
        backgroundColor: 'white',
        borderBottomColor: '#f2f3f7',
        borderBottomWidth: 1
    },
    item: {
        padding: 20
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 5
    },
    itemTitleUnset: {
        fontStyle: 'italic'
    },
    itemExcerpt: {
        opacity: 0.4,
        fontSize: 14
    },
    btnAction: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnLabel: {
        fontSize: 10,
        color: 'black',
        opacity: 0.6,
        textAlign: 'center'
    }
});