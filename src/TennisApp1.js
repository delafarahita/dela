import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, FlatList} from 'react-native'

const App = () => {
  return (
    <View style={styles.container}>
      <Image 
      style={styles.img}
      source={require('../src/gambar/tenis.png')} />
      <TouchableOpacity
      style={styles.button} >
        <Image
        style={styles.icon}
        source={require('../src/gambar/search.png')} />
        <TextInput
        placeholder='Search'
        style={styles.text1} > 
        </TextInput>
      </TouchableOpacity>
      <Text style={styles.text2}>Popular places
      </Text>
      <FlatList
      renderItem={({item}) =>
      <View>        
      <Text style={styles.item}>{item.key}</Text>
      <Text style={styles.harga}>{item.harga}</Text>
      <Image source={item.src} style={styles.img1} />
      </View>
      }
        data={[
          {
            key:'Zenith Tennis Center',
            harga: '$15 per hour',
            src: require('../src/gambar/zenith.png'),
          },
          {
            key: 'Lacoste Club',
            harga: '$25 per hour',
            src: require('../src/gambar/lacoste.png'),
          },
          {
            key:'Hatch End',
            harga:'$20 per hour',
            src: require('../src/gambar/hatch.png'),
          },
        ]}
        />
        <Image 
        style={styles.imgsettings}
        source={require('../src/gambar/settings.png')} />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    flex:1,
  },
  img:{
    position:'absolute',
    height:250,
    width:360,
  },
  button:{
    marginTop:50,
    backgroundColor:'white',
    height:60,
    width:280,
    borderRadius:10,
    marginTop:220,
    marginLeft:40,
    backgroundColor:'white',
    shadowRadius:4.65,
    shadowColor:'#000',
    shadowOpacity:0.29,
    shadowOffset:{
      width:0,
      height:3,
    },
    elevation:7,
  },
  icon:{
    position:'absolute',
    marginLeft:20,
    marginTop:18,
    color:'black'
  },
  text1:{
    position:'absolute',
    marginLeft:50,
    marginTop:5,
    color:'black'
  },
  text2:{
    marginLeft:30,
    marginTop:20,
    marginBottom:30,
    fontSize:24,
    fontFamily:'poppins',
    fontWeight:'bold',
    color:'black'
  },
  item:{
    marginLeft:95,
    marginTop:20,
    fontSize:16,
    fontFamily:'roboto',
    color:'black'
  },
  harga:{
    marginLeft:95,
    marginBottom:30,
    fontSize:14,
    fontFamily:'Roboto',
    color:'grey'
  },
  img1:{
    position:'absolute',
    marginLeft:30,
    marginTop:15,
    height:50,
    width:50,
  },
  imgsettings:{
    position:'absolute',
    marginLeft:270,
    marginTop:650,
    height:50,
    width:50,
  },
})

