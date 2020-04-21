import { Dimensions, StyleSheet } from 'react-native';

const gray = '#cccccc';
const blue = '#5DBCD2';
const white = '#ffffff';
const red = '#ff4444';
const pink = '#ffaaaa';
const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: blue,
    },
    weatherInfoLarge: {
        textAlign: 'center',
        fontSize: 80,
        fontWeight: "600",
        margin: 5,
        color: white,
    },
    weatherInfo: {
        textAlign: 'center',
        fontSize: 18,
        margin: 5,
        color: white,
    },
    searchbox: {
        textAlign: 'center',
        margin: 10,
        height: 40,
        marginTop: 50,
        borderColor: gray,
        borderWidth: 1,
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'stretch',
        backgroundColor: white,
        borderRadius: 10,
    },
    searchContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorContainer: {
        borderColor: red,
        borderWidth: 1,
        backgroundColor: pink,
        padding: 5,
    },
    errorMessage: {
        textAlign: 'center',
        color: red,
        fontSize: 20,
        margin: 10,
    },
    options: {
        marginTop: 20,
        marginBottom: 40
    },
    optionWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    weatherIcon: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 64,
    },
    mainContainer: {
        flex: 1,
        backgroundColor: '#5DBCD2',
        textAlign: 'center',
        justifyContent: 'center',
    },
    input: {
        borderColor: '#FFFFFF',
        borderRadius: 10,
        borderWidth: 2,
        marginBottom: 15,
        marginHorizontal: 70,
        paddingHorizontal: 10,
        backgroundColor: '#FFFFFF',
    },
    largeInput: {
        borderColor: '#FFFFFF',
        borderRadius: 10,
        borderWidth: 2,
        marginBottom: 15,
        marginHorizontal: 40,
        paddingHorizontal: 10,
        backgroundColor: '#FFFFFF',
    },    
    label: {
        alignSelf: 'center',
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    btnLabel: {
        alignSelf: 'center',
        color: '#5DBCD2',
        fontSize: 14,
        fontWeight: 'bold',
    },
    sectionHeader: {
        alignSelf: 'center',
        color: '#FFFFFF',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    submit: {
        backgroundColor: '#EFEFEF',
        alignSelf: 'center',
        padding: 8,
        borderRadius: 10,
        marginBottom: 20,
    }
});

export default styles;
