import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Mypic = (props) => {

    let picURL = props.imageURL;
    return (
        <Image style={styles.Picture} source={{ uri: picURL }} />
    )
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 150,
        flex: 1,
        backgroundColor: '#d5ffff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    text: {
        fontSize: 100
    },
    Picture: {
        height: 255,
        width: 400
    }
});

export default Mypic;
