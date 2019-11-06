import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    rowTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'nowrap',
        alignItems: 'center',
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#f5f5f5',
        paddingBottom: 10,
        paddingTop: 10
    },
    title: {
        flex: 1,
        paddingRight: 10,
        paddingLeft: 10,
        paddingBottom: 5,
        paddingTop: 5,
        fontSize: 19,
        fontWeight: '700',
        borderRightColor: '#f5f5f5',
        borderRightWidth: 1
    },
    headerContainerIcons: {
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    icnWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 35,
        height: 35,
        marginLeft: 7
    },
    icnWrapperFirst: {
        marginLeft: 0
    }
});