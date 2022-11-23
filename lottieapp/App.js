import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Lottie from 'lottie-react-native';
import LottieView from 'lottie-react-native';


import { useState, useEffect } from 'react';


export default function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    //pretend its taking time to connect and retrieve data
    setLoading(()=>{

    }, 1000)

  }, [])

  if(loading){
    return <LottieView
    autoPlay
    
    style={{width:100, height:100,
    backgroundColor: '#eee',
  }}
  source={require('./assets/98288-loading.json')}
    />
  } 
  return (
    <View>
    <Text>Youre loaded!
      </Text>

    </View>
  );
}

