import React,{useEffect} from 'react';
import {Image} from 'react-native';
import {Header,Left,Body,Right,Icon,Title} from 'native-base';
import {connect} from 'react-redux';
import { SignOut } from '../store/actions/action';
import { TouchableOpacity } from 'react-native-gesture-handler';

function CustomHeader(props) {

 return (
    <Header  androidStatusBarColor='red' rounded={true} style={{backgroundColor:'black'}}>
    <Left style={{flex:0}}>
        <Icon name='menu' style={{color:'white'}} onPress={()=>props.nav.navigation.openDrawer()}/>
    </Left>
    <Body style={{flex:1,alignItems:'center',width:'100%'}}>
        <Title>{props.title}</Title>
    </Body>
    <Right style={{flex:0}}>
        <TouchableOpacity>
        {props.title === 'Profile'? <Icon name='power-off' type='FontAwesome5' style={{color:'white',fontSize:22}} onPress={()=>{props.logout(props)}}/> :
        <TouchableOpacity onPress={()=>{props.nav.navigation.navigate('Profile')}}>
        <Image source={{uri:props.nav.state.guser.photo}}  style={{width:40,height:40,borderRadius:100,resizeMode:'contain'}}/> 
        </TouchableOpacity> }
    </TouchableOpacity>
    </Right>
</Header> 
 );
}
function mapStateToProp(state){
return {
state,
}
}

function mapDispatchToProp(dispatch){
    return {
        logout : (props)=>{dispatch(SignOut(props))},

    }
    }
    
export default connect(mapStateToProp,mapDispatchToProp)(CustomHeader)