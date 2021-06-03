import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, FlatList} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

export default function App ({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={()=> navigation.navigate('satu')} >
        <Image
        style={styles.img}
        source={require('../src/gambar/close.png')} />
        </TouchableOpacity>
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
      <Image source={item.src} style={styles.imgDetails} />
      </View>
      }
        data={[
          {
            key:'Thursday, June 10',
            harga: '9:30 - 11:00 PM',
            src: require('../src/gambar/calendar.png'),
          },
          {
            key: 'Washington, DC',
            harga: '129 Oakway Lane',
            src: require('../src/gambar/location.png'),
          },
         ]}
        />
        </TouchableOpacity>
        <Text style={styles.textMembers}>Members
        </Text>
        <Image 
        style={styles.imgPlus}
        source={require('../src/gambar/plus.png')} />
        <Image 
        style={styles.imgHijab}
        source={require('../src/gambar/hijab.png')} />
        <Image 
        style={styles.imgJoongki}
        source={require('../src/gambar/joongki.png')} />
        <Image 
        style={styles.imgCurly}
        source={require('../src/gambar/curly.png')} />
        <Image 
        style={styles.imgEunwoo}
        source={require('../src/gambar/eunwoo.png')} />
        <TouchableOpacity
        style={styles.buttonBook} >
        <Text style={styles.textBook}>Book it!
        </Text>
        </TouchableOpacity>
    </View>
  )
}

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
    marginTop:25,
    marginLeft:40,
  },
  textJudul1:{
    position:'absolute',
    marginTop:100,
    marginLeft:120,
    fontSize:24,
    fontFamily:'poppins',
    color:'white'
  },
  textJudul2:{
    position:'absolute',
    marginTop:130,
    marginLeft:120,
    marginBottom:30,
    fontSize:24,
    fontFamily:'poppins',
    color:'white'
  },
  img3:{
    height:25,
    width:25,
    marginTop:10,
    marginLeft:120,
  },
  textRate:{
    position:'absolute',
    marginTop:175,
    marginLeft:153,
    marginBottom:30,
    fontSize:18,
    fontFamily:'poppins',
    fontWeight:'bold',
    color:'white'
  },
  button:{
    backgroundColor:'white',
    height:1000,
    borderRadius:25,
    marginTop:30,
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
    marginTop:40,
    marginLeft:50,
    fontSize:24,
    fontFamily:'Roboto',
    color:'black',
  },
  imgDetails:{
    position:'absolute',
    resizeMode:'cover',
    marginLeft:50,
    marginTop:30,
    height:40,
    width:40,
  },
  item:{
    marginLeft:100,
    marginTop:35,
    fontSize:16,
    fontFamily:'roboto',
    color:'black'
  },
  harga:{
    marginLeft:100,
    fontSize:14,
    fontFamily:'Roboto',
    color:'grey'
  },
  textMembers:{
    position:'absolute',
    marginTop:480,
    marginLeft:50,
    fontSize:24,
    fontFamily:'Roboto',
    color:'black',
  },
  imgPlus:{
    position:'absolute',
    marginLeft:50,
    marginTop:530,
    height:40,
    width:40,
  },
  imgHijab:{
    position:'absolute',
    marginLeft:100,
    marginTop:530,
    height:40,
    width:40,
  },
  imgJoongki:{
    position:'absolute',
    marginLeft:150,
    marginTop:530,
    height:40,
    width:40,
  },
  imgCurly:{
    position:'absolute',
    marginLeft:200,
    marginTop:530,
    height:40,
    width:40,
  },
  imgEunwoo:{
    position:'absolute',
    marginLeft:250,
    marginTop:530,
    height:40,
    width:40,
  },
  buttonBook:{
    position:'absolute',
    backgroundColor:'#F6C000',
    height:60,
    width:265,
    borderRadius:25,
    marginTop:600,
    marginLeft:50,
    marginRight:50,
    shadowRadius:4.65,
    shadowColor:'#000',
    shadowOpacity:0.29,
    shadowOffset:{
      width:0,
      height:3,
    }
  },
  textBook:{
    position:'absolute',
    textAlign:'center',
    marginTop:20,
    marginLeft:100,
    fontSize:16,
    fontFamily:'Roboto',
    fontWeight:'bold',
    color:'#FFFFFF'
  },
 })
