import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, FlatList} from 'react-native'

const App = () => {
  return (
    <View style={styles.container}>
        <Image
        style={styles.img}
        source={require('../src/gambar/close.png')} />
        <Image 
        style={styles.img2}
        source={require('../src/gambar/zenith.png')} />
        <Text style={styles.textJudul1}>Zenith Tennis
        </Text>
        <Text style={styles.textJudul2}>Center
        </Text>
        <Image 
        style={styles.img3}
        source={require('../src/gambar/star.png')} />
        <Text style={styles.textRate}>4,8
        </Text>
        <TouchableOpacity
        style={styles.button} >
        <Text style={styles.textDetails}>Details
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
      </TouchableOpacity>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#F6C000',
    flex:1,
  },
  img:{
    height:35,
    width:35,
    marginTop:40,
    marginLeft:280,
  },
  img2:{
    height:65,
    width:65,
    marginTop:40,
    marginLeft:40,
  },
  textJudul1:{
    position:'absolute',
    marginTop:115,
    marginLeft:120,
    fontSize:24,
    fontFamily:'poppins',
    color:'white'
  },
  textJudul2:{
    position:'absolute',
    marginTop:145,
    marginLeft:120,
    marginBottom:30,
    fontSize:24,
    fontFamily:'poppins',
    color:'white'
  },
  img3:{
    height:25,
    width:25,
    marginTop:15,
    marginLeft:120,
  },
  textRate:{
    position:'absolute',
    marginTop:195,
    marginLeft:153,
    marginBottom:30,
    fontSize:18,
    fontFamily:'poppins',
    fontWeight:'bold',
    color:'white'
  },
  button:{
    marginTop:50,
    backgroundColor:'white',
    height:1000,
    borderRadius:25,
    marginTop:50,
    backgroundColor:'white',
    shadowRadius:4.65,
    shadowColor:'#000',
    shadowOpacity:0.29,
    shadowOffset:{
      width:0,
      height:3,
    }
  },
  textDetails:{
    position:'absolute',
    marginTop:30,
    marginLeft:50,
    marginBottom:30,
    fontSize:24,
    fontFamily:'Roboto',
    color:'black',
  },
  item:{
    marginLeft:95,
    marginTop:20,
    fontSize:16,
    fontFamily:'roboto',
    color:'black'
  },
 })
