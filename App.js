import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Mypic from './MyPic';

const App = () => {
  let txtName = 'tanawat';
  let keyword1 = 'do';
  let keyword2 = 'g'
  let picURL1 = `https://source.unsplash.com/400x255/?${keyword1+keyword2}&sig=1`;
  let picURL2 = `https://source.unsplash.com/400x255/?${keyword1}${keyword2}&sig=1`;

  
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{txtName}</Text>
      <Mypic imageURL={picURL1} />
      <Mypic imageURL={picURL2} />
    </View>
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
});

export default App;

//<Mypic txtName='https://www.google.co.th/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' />