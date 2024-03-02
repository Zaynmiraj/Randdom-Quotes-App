import {  SafeAreaView, Linking, Image,Share, StatusBar, TouchableOpacity, Text, View } from 'react-native'
import React,{ useState} from 'react'
import {styles} from './styles'
import Clipboard from '@react-native-clipboard/clipboard';
import Snackbar from 'react-native-snackbar';
import Tts from 'react-native-tts';
import { BannerAd, BannerAdSize, TestIds} from '@react-native-admob/admob';


export default function App() {
  const[quote, setQuote] =useState('If you want to be happy, just make less your expectation');
  const[author, setAuthor] =useState("ZaYn Miraj");
  const[loading , setloading] = useState(false);
  const[speaking , setSpeak] = useState(false);


const quotes = () =>{
  setloading(true)
  fetch('https://api.quotable.io/random').then((res)=> res.json()).then((result) => {
    setQuote(result.content);
    setAuthor(result.author);
    setloading(false)

  })
}
const copyToClipboard = () => {
  Clipboard.setString(`${quote}  _author  : ${author}`);
  Snackbar.show({
    text: 'Copied',
    duration: Snackbar.LENGTH_SHORT,
  });
};

const getSpeak = () => {
  Tts.stop();
  Tts.speak(`${quote} by ${author}`, {
    androidParams: {
      KEY_PARAM_PAN: -1,
      KEY_PARAM_VOLUME: 0.8,
      KEY_PARAM_STREAM: 'STREAM_MUSIC',
    },
  });
  Tts.addEventListener('tts-start',(event) => setSpeak(true));
  Tts.addEventListener('tts-finish',(event) => setSpeak(false));

}




const onShare = async() => {

  try{
    const result = await Share.share({
      message: quote +' by '+ author,
    });

    if(result.action === Share.sharedAction){
      if(result.activityType){

      }else{

      }
    }else if(result.action === Share.dismissedAction){
      
    }

  }catch(error){
    alert(error.message);

  }

}



  return (
    <SafeAreaView style={{flex:1,}}>
      <StatusBar
        backgroundColor="#33C4FF"
       />
      <View style={styles.main}>
        <View style={styles.sub}>
          <Text style={styles.title}> Mind changing quote </Text>
            <Text style={{fontSize:20, textAlign:'left', width:'100%'}}>"</Text>
            <Text style={styles.quote}> {quote}</Text>
            <Text style={{fontSize:20, textAlign:'right',width:'100%'}}>"</Text>
            <Text style={styles.author}>_ {author}</Text>

            <TouchableOpacity onPress={quotes} style={{width:'100%', justifyContent:'center', alignItems:'center'}}>
              <Text style={styles.button}> {loading ? 'Please wait' : 'New Quote'} </Text></TouchableOpacity>
              <View style={{display:'flex', flexDirection:'row', justifyContent:'space-around', width:'100%', margin: 30}}>
                <TouchableOpacity onPress={copyToClipboard}><Image  style={styles.image} source={require('./icon/copy.png')} /></TouchableOpacity>
                <TouchableOpacity onPress={getSpeak}><Image style={{width:40,height:40, margin: 10, borderRadius:20, backgroundColor: speaking ? 'red' : 'white'}} source={require('./icon/voice.png')} /></TouchableOpacity>
                <TouchableOpacity onPress={onShare}><Image style={styles.image} source={require('./icon/share.png')} /></TouchableOpacity>
              </View>
            
        </View>
      </View>
      <BannerAd 
      size={BannerAdSize.BANNER}
      unitId="ca-app-pub-1662853246746272/4158738875"
      />
      
    </SafeAreaView>
  )
}



