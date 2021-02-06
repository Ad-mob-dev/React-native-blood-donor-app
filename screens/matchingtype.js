import React from 'react';
import { connect } from 'react-redux'
import { Container, Header, Text, ListItem, Thumbnail, Separator ,View, Footer, Badge} from 'native-base'
import CustomHeader from '../components/header';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import {ImageBackground, Linking} from 'react-native';


function MatchingType(props) {


    return (

        <Container>

            <CustomHeader title="Your Match" nav={props} />
            {!props.state.guser ? <Text style={{ alignSelf: 'center' }}>Nothing Found</Text> : <FlatList
                data={props.state.users}
                ItemSeparatorComponent = {()=>{
                    return <Separator style={{height:2}}/>
                }}
                centerContent = {true}
                indicatorStyle =  'default'
                // contentContainerStyle= {{backgroundColor:'gray'}}
                overScrollMode = 'auto'
                keyExtractor={(item, index) => index.toString()}
                key={(item) => item.key}
                renderItem={({ item }) => {
                    switch (props.state.guser.bloodgrp) {
                        case 'AB+':
                            if (item.bloodgrp === 'A-' || item.bloodgrp === 'O-' || item.bloodgrp === 'A+' || item.bloodgrp === 'O+' || item.bloodgrp === 'AB+' || item.bloodgrp === 'AB-' || item.bloodgrp === 'B-' || item.bloodgrp === 'B+') {
                                return <>
                                        <TouchableOpacity  onPress={() => { Linking.openURL(`tel:${item.phone}`) }}>
                                        {props.state.guser.id !== item.id ? <ListItem avatar={true} style={{justifyContent:'flex-start',padding:5}}>
                                     <Thumbnail source={{uri:item.photo}} circular={true}  style={{height:50,width:50,marginRight:10,borderRadius:200}}/>
                                    <Text style={{color:'black'}}>{item.name}</Text>
                                    <ImageBackground  source={require('../assets/bgif.png')} resizeMode="stretch" style={{width:40,height:48,marginLeft:'auto',marginRight:10,alignItems:'center',justifyContent:'center',color:'white'}}>
                    <Text style={{textAlign:'center',color:'white',fontSize:15,marginTop:7,fontWeight:'bold'}}>{item.bloodgrp}</Text>
                    </ImageBackground>
    
                        
                                    </ListItem>  : null
                            }
                                        </TouchableOpacity>

                                    </> 
                                }
                            break;            
                        case 'AB-':
                            if (item.bloodgrp === 'O-' ||
                                item.bloodgrp === 'B-' ||
                                item.bloodgrp === 'AB-' ||
                                item.bloodgrp === 'A-') {
                                return <>
                                        <TouchableOpacity onPress={() => { Linking.openURL(`tel:${item.phone}`) }}>
                                        {props.state.guser.id !== item.id ? <ListItem avatar={true} style={{justifyContent:'flex-start',padding:5}}>
                                        <Thumbnail source={{uri:item.photo}} circular={true}  style={{height:50,width:50,marginRight:10,borderRadius:200}}/>
                              
                                    <Text>{item.name}</Text>
                        
                                    <ImageBackground  source={require('../assets/bgif.png')} resizeMode="stretch" style={{width:40,height:48,marginLeft:'auto',marginRight:10,alignItems:'center',justifyContent:'center',color:'white'}}>
                                    <Text style={{textAlign:'center',color:'white',fontSize:15,marginTop:7,fontWeight:'bold'}}>{item.bloodgrp}</Text>
                                    </ImageBackground>

                        
                                    </ListItem>  : null
                            }

                                      </TouchableOpacity>

                                    </> 


                            }
                        break;
                        case 'B+':       
                            if (item.bloodgrp === 'O-' || item.bloodgrp === 'O+' || item.bloodgrp === 'B-' || item.bloodgrp === 'B+' ){
                                return <>
                                <TouchableOpacity onPress={()=>{Linking.openURL(`tel:${item.phone}`)}}>
                                {props.state.guser.id !== item.id ? <ListItem avatar={true} style={{justifyContent:'flex-start',padding:5}}>
                                <Thumbnail source={{uri:item.photo}} circular={true}  style={{height:50,width:50,marginRight:10,borderRadius:200}}/>
                              
                                    <Text>{item.name}</Text>
                        
                                    <ImageBackground  source={require('../assets/bgif.png')} resizeMode="stretch" style={{width:40,height:48,marginLeft:'auto',marginRight:10,alignItems:'center',justifyContent:'center',color:'white'}}>
                                    <Text style={{textAlign:'center',color:'white',fontSize:15,marginTop:7,fontWeight:'bold'}}>{item.bloodgrp}</Text>
                                    </ImageBackground>
                
                        
                                    </ListItem>  : null
                            }
                                    </TouchableOpacity>
                                    
                                 </> 
                            }
                        break;

                        case 'B-':
                            if (item.bloodgrp === 'O-' || item.bloodgrp === 'B-'){
                                return<>
                                <TouchableOpacity onPress={()=>{Linking.openURL(`tel:${item.phone}`)}}>
                                {props.state.guser.id !== item.id ? <ListItem avatar={true} style={{justifyContent:'flex-start',padding:5}}>
                                <Thumbnail source={{uri:item.photo}} circular={true}  style={{height:50,width:50,marginRight:10,borderRadius:200}}/>
                                   
                                    <Text>{item.name}</Text>
                        
                                    <ImageBackground  source={require('../assets/bgif.png')} resizeMode="stretch" style={{width:40,height:48,marginLeft:'auto',marginRight:10,alignItems:'center',justifyContent:'center',color:'white'}}>
                                    <Text style={{textAlign:'center',color:'white',fontSize:15,marginTop:7,fontWeight:'bold'}}>{item.bloodgrp}</Text>
                                    </ImageBackground>
                 
                        
                                    </ListItem>  : null
                            } 
                                    </TouchableOpacity>
                                    
                                 </> 
                            }
                            break;

                        case 'O+':
                            if (item.bloodgrp == 'O-' || item.bloodgrp == 'O+'){
                                return <>
                                <TouchableOpacity onPress={()=>{Linking.openURL(`tel:${item.phone}`)}}>
                               {props.state.guser.id !== item.id ? <ListItem avatar={true} style={{justifyContent:'flex-start',padding:5}}>
                               <Thumbnail source={{uri:item.photo}} circular={true}  style={{height:50,width:50,marginRight:10,borderRadius:200}}/>
                                      
                                    <Text>{item.name}</Text>
                        
                                    <ImageBackground  source={require('../assets/bgif.png')} resizeMode="stretch" style={{width:40,height:48,marginLeft:'auto',marginRight:10,alignItems:'center',justifyContent:'center',color:'white'}}>
                                    <Text style={{textAlign:'center',color:'white',fontSize:15,marginTop:7,fontWeight:'bold'}}>{item.bloodgrp}</Text>
                                    </ImageBackground>
                                   
                        
                                    </ListItem>  : null
                            }
                                    </TouchableOpacity>
 
                                    
                                 </> 
                            }
                             break;
                        
                        case 'O-':
                            if (item.bloodgrp === 'O-'){   
                                return <>
                                <TouchableOpacity onPress={()=>{Linking.openURL(`tel:${item.phone}`)}}>
                                {props.state.guser.id !== item.id ? <ListItem avatar={true} style={{justifyContent:'flex-start',padding:5}}>
                                <Thumbnail source={{uri:item.photo}} circular={true}  style={{height:50,width:50,marginRight:10,borderRadius:200}}/>
                                  
                                    <Text>{item.name}</Text>
                        
                                    <ImageBackground  source={require('../assets/bgif.png')} resizeMode="stretch" style={{width:40,height:48,marginLeft:'auto',marginRight:10,alignItems:'center',justifyContent:'center',color:'white'}}>
                                    <Text style={{textAlign:'center',color:'white',fontSize:15,marginTop:7,fontWeight:'bold'}}>{item.bloodgrp}</Text>
                                    </ImageBackground>
                
                        
                                    </ListItem>  : null
                            }

                                    </TouchableOpacity>
                                    
                                 </> 
                            }
                        break;

                        case 'A-':
                            if (item.bloodgrp === 'A-' || item.bloodgrp === 'O-'){
                                <>
                                <TouchableOpacity onPress={()=>{Linking.openURL(`tel:${item.phone}`)}}>
                                {props.state.guser.id !== item.id ? <ListItem avatar={true} style={{justifyContent:'flex-start',padding:5}}>
                                <Thumbnail source={{uri:item.photo}} circular={true}  style={{height:50,width:50,marginRight:10,borderRadius:200}}/>
                                   
                                  <Text>{item.name}</Text>
                        
                                  <ImageBackground  source={require('../assets/bgif.png')} resizeMode="stretch" style={{width:40,height:48,marginLeft:'auto',marginRight:10,alignItems:'center',justifyContent:'center',color:'white'}}>
                                    <Text style={{textAlign:'center',color:'white',fontSize:15,marginTop:7,fontWeight:'bold'}}>{item.bloodgrp}</Text>
                                    </ImageBackground>
                 
                        
                                    </ListItem>  : null
                            }
                                    </TouchableOpacity>
                                    
                                 </> 
                            }
                        break;

                        case 'A+':
                            if(item.bloodgrp === 'A-' || item.bloodgrp === 'O-' || item.bloodgrp === 'A+' || item.bloodgrp === 'O+')
                            {
                                return <>
                                <TouchableOpacity onPress={()=>{Linking.openURL(`tel:${item.phone}`)}}>
                                {props.state.guser.id !== item.id ? <ListItem avatar={true} style={{justifyContent:'flex-start',padding:5}}>
                                <Thumbnail source={{uri:item.photo}} circular={true}  style={{height:50,width:50,marginRight:10,borderRadius:200}}/>
                              
                                    <Text>{item.name}</Text>
                        
                                    <ImageBackground  source={require('../assets/bgif.png')} resizeMode="stretch" style={{width:40,height:48,marginLeft:'auto',marginRight:10,alignItems:'center',justifyContent:'center',color:'white'}}>
                                    <Text style={{textAlign:'center',color:'white',fontSize:15,marginTop:7,fontWeight:'bold'}}>{item.bloodgrp}</Text>
                                    </ImageBackground>
                
                        
                                    </ListItem>  : null
                            } 
                              
                                    </TouchableOpacity>
                                    
                                 </> 
                            }
                        
                            default:
                                return null;
                            break;
                    }

                }}
            />
            }
        </Container>



    )
}


const mapStateToProps = (state) => ({
    state,
});


export default connect(mapStateToProps, null)(MatchingType)
