import * as React from 'react';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
  } from '@react-navigation/drawer';
import { Icon } from 'native-base';
import {Dimensions, Image,View} from 'react-native';


  function SideBar(props) {
    return (

      <DrawerContentScrollView style={{width:'100%'}} {...props}>
        <DrawerItem  label="Donor's Dock" labelStyle={{fontWeight:'bold',fontSize:20}} icon={({focused,color,size})=>{
            return <Icon  color={color} size={size} name={focused ? 'heart':'heart-outline'} style={{color:'red'}}/>
        }} />

        <View>
        <Image source={require('../assets/logo.jpg')} style={{width:Dimensions.get('screen').width,height:200}}/>
        </View>
         
        <DrawerItemList activeBackgroundColor='black' activeTintColor='red' labelStyle={{fontWeight:'bold',fontSize:14}} {...props}/>

      </DrawerContentScrollView>
    );
  }

  export default SideBar;