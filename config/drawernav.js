import * as React from 'react';
import {Dimensions} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from '../screens/profile';
import Home from '../screens/homeScreen';
import SideBar from '../screens/sidebar';
import { Icon } from 'native-base';
import SearchDonor from '../screens/searchdonor';
import MatchingType from '../screens/matchingtype';
import GuideLines from '../screens/guidelines';


const Drawer = createDrawerNavigator();
 
function Drawerr(){
return (
<Drawer.Navigator 
drawerStyle={{
width:Dimensions.get('screen').width,
}} 
overlayColor='gray'
  
drawerType='slide' 
drawerContent={(props)=>{
    return <SideBar {...props}/>
}}
 initialRouteName='Home'
>

 {/* first nav */}
 <Drawer.Screen name='Home'  component={Home} options={{
     drawerIcon: ({color,size,focused}) =>{
         return <Icon color={color} size={size} name='home' style={focused ? {color:'red'} : {color:'white'}} />
    
     }
 }}/>


 {/* second nav */}
 <Drawer.Screen name='Profile' component={Profile} 
 options ={{
    drawerIcon: ({color,size,focused}) =>{
         return <Icon color={color} size={size} name='user-shield' type='FontAwesome5' style={focused ? {color:'red'} : {color:'white'}} />
     }
 }}
 />

<Drawer.Screen  name="Search Donors" component={SearchDonor}
options={{
    drawerIcon : ({color,size,focused})=>{
        return <Icon color={color} size={size} name='search' type='FontAwesome5' style={focused ? {color:'red'} : {color:'white'}} />
    }

}}
/> 

<Drawer.Screen  name="Your Match" component={MatchingType}
options={{
    drawerIcon : ({color,size,focused})=>{
        return <Icon color={color} size={size} name='blood-bag' type='MaterialCommunityIcons' style={focused ? {color:'red'} : {color:'white'}} />
    }

}}
/> 

<Drawer.Screen  name="Guidelines" component={GuideLines}
options={{
    drawerIcon : ({color,size,focused})=>{
        return <Icon color={color} size={size} name='book-account' type='MaterialCommunityIcons' style={focused ? {color:'red'} : {color:'white'}} />
    }

}}
/> 
</Drawer.Navigator>

)
}

export default Drawerr;