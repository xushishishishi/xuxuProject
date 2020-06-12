import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  ImageBackground,
  Modal,
  Picker
} from 'react-native';
export default class HomeScreen extends Component {
  state = {
    language:'java'
  }
  render() {
    return (
        <View>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView>
            <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={styles.scrollView}>
                <ActivityIndicator size="large" color="red" />
                <Text>*********************</Text>
                <Button title="button" onPress={() => {
                 this.setModalVisible(!this.state.modalVisible);
                }}/>
                <FlatList
                   data={[{key: 'a'}, {key: 'b'}]}
                   renderItem={({item}) => <Text>{item.key}</Text>}
                />
                <Image style={{width: 100, height: 100}} source={{uri:'https://c-ssl.duitang.com/uploads/item/201807/16/20180716213906_UxiPX.thumb.1000_0.gif'}}/>
                <ImageBackground style={{width: '100%', height: '100%'}} source={{uri: 'https://c-ssl.duitang.com/uploads/item/202002/17/20200217150151_cxkzc.thumb.700_0.jpg'}}>
                    <Text>*********************</Text>
                </ImageBackground>
            </ScrollView>
            <Picker style={{height: 50, width: 200}} selectedValue={this.state.language} onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </SafeAreaView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    mainBox:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})