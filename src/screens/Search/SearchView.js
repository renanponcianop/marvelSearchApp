import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Dimensions,
    ActivityIndicator
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default ({
    onSearchChange,
    onSubmit,
    searchWord,
    error,
    loading
})=>{
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Marvel Hero Search</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.containerInputs}>
                    <View style={styles.containerInput}>
                        <TextInput
                            placeholder='What hero do you want to know more?'
                            style={styles.input}
                            onChangeText={onSearchChange}
                            value={searchWord}
                        />
                        {error && (<Text style={styles.error}>{ error }</Text>)}
                    </View>
                    <View style={styles.containerButton}>
                        <TouchableOpacity
                            style={styles.searchButton}
                            onPress={onSubmit}>
                            {
                              loading ? (<ActivityIndicator size="small" color="#fff"/>) : (<Text style={styles.searchButtonText}>Search</Text>)
                            }
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText : {
        fontSize: 32,
    },
    content: {
        flex: 2
    },
    containerInputs : {
        flex: 1,
        marginHorizontal: 30,
    },
    containerInput: {
        paddingVertical: 10,
    },
    input: {
        borderBottomWidth: 1,
        fontSize: 18,
    },
    searchButton: {
        backgroundColor: '#4F43A1',
        width: width * .5,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchButtonText: {
        color: '#fff'
    },
    containerButton: {
        marginTop: 35,
        alignSelf: 'center',
    },
    error: {
      color: 'red',
      fontWeight:'bold',
    }
})
