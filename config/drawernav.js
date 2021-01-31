import * as React from 'react';
import {Dimensions} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from '../screens/profile';
import Home from '../screens/homeScreen';
import SideBar from '../screens/sidebar';
import { Icon } from 'native-base';


const Drawer = createDrawerNavigator();
 
function Drawerr(){
return (
<Drawer.Navigator 
drawerStyle={{
width:Dimensions.get('screen').width/1.3}} 
overlayColor='gray'  
drawerType='slide' 
drawerContent={(props)=>{
    return <SideBar {...props}/>
}}
 initialRouteName='home'
>

 {/* first nav */}
 <Drawer.Screen name='home'  component={Home} options={{
     drawerIcon: ({color,size,focused}) =>{
         return <Icon color={color} size={size} name='home' style={focused ? {color:'white'} : {color:'black'}} />
    
     }
 }}/>


 {/* second nav */}
 <Drawer.Screen name='Profile' component={Profile} 
 options ={{
    drawerIcon: ({color,size,focused}) =>{
         return <Icon color={color} size={size} name='user-shield' type='FontAwesome5' style={focused ? {color:'white'} : {color:'black'}} />
     }
 }}
 />

<Drawer.Screen  name="Search Donors" component={SearchDonor}
options={{
    drawerIcon : ({color,size,focused})=>{
        return <Icon color={color} size={size} name='search' type='FontAwesome5' style={focused ? {color:'white'} : {color:'black'}} />
    }

}}
/> 

</Drawer.Navigator>

)
}

export default Drawerr;