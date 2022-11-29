import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WebView, { webvView } from 'react-native-webview'

const DGSW = 'http://careermaker.dothome.co.kr/html/index.html'

export default function App() {
  return (
    <View style={styles.container}>
      <View style= {{ width:'100%',height:'100%'}}>
       
       <WebView
            source={{uri: DGSW }}
            onLoad={console.log('load!')}
            />
        </View>
        
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex:1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
