import React ,{useEffect} from 'react';
import { connect } from 'react-redux';
import {Container,Content,Text, Left,Icon, Body,View,Thumbnail ,Card,CardItem,DeckSwiper} from 'native-base';
import { Linking } from 'react-native';
import {CuSaver} from '../store/actions/action';
import {StyleSheet,Image,Dimensions} from 'react-native';
import CustomHeader from '../components/header';


function Home(props) {
    useEffect(() => {          
          
        props.update(props);
        
       
    },[])

    const {users} = props.state;
    const {guser}= props.state;
  
    return (
    <Container>
       <CustomHeader title ="Home" nav={props} />
        <Content>
            <Text style={{alignSelf:'center',fontSize:25,marginTop:10}}>All Donors</Text>
           <View style={{height:600,width:Dimensions.get('screen').width-20,alignSelf:'center'}}>          
            <DeckSwiper
            dataSource={users}
            renderItem={item => 
              <Card style={{ elevation: 3 }}>
                <CardItem >
                  <Left>
                    <Thumbnail source={{uri:item.photo}} />
                    <Body>
                      <Text numberOfLines={1} ellipsizeMode='head'>{item.name}</Text>
                      <Text note>{item.location}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 180, flex: 1,resizeMode:'cover'}} source={{uri:item.photo}} />
                </CardItem>
                
                <CardItem bordered style={{justifyContent:'space-evenly',alignItems:'center'}}>
                {/* 1 */}
                <CardItem button style={{elevation:1,backgroundColor:'lightgray',opacity:0.8}}>
                <Icon name="mail" style={{ color:item.gender === 'Male' || item.gender === 'male' || item.gender === 'm' || item.gender === 'M'? '#0d0514' : '#ED4A6A',fontSize:28,textAlign:'center'}} 
                  onPress={()=>{Linking.openURL(`mailto:${item.email}`)}}
                  />
                </CardItem>
                

                
                {/* 2 */}
                <CardItem button style={{elevation:1,borderColor:'gray',backgroundColor:'lightgray',opacity:0.8}}>
                  <Icon name="old-phone" type='Entypo' style={{ color:item.gender === 'Male' || item.gender === 'male' || item.gender === 'm' || item.gender === 'M'? '#0d0514' : '#ED4A6A' ,fontSize:28,textAlign:'center'}} 
                  onPress={()=>{Linking.openURL(`tel:${item.phone}`)}}
                   />
                
                </CardItem>
                
                {/* 3 */}
                <CardItem button  style={{elevation:1,backgroundColor:'lightgray',opacity:0.8}}>
                  <Icon name="whatsapp" type='FontAwesome' style={{ color:item.gender === 'Male' || item.gender === 'male' || item.gender === 'm' || item.gender === 'M'? '#0d0514' : '#ED4A6A',fontSize:28,textAlign:'center'}} 
                  onPress={()=>{Linking.openURL(`whatsapp://send?text= Hello Dear ( ${item.name} ), I Hope you're Fine !! I've Found you on Donor's Dock with location ( ${item.location} ),I need ( ${item.bloodgrp} ) blood type urgently.. Can you help ?? &phone= ${item.phone}`)}}
                  />
                
                </CardItem>
                

                </CardItem>
                
                <CardItem bordered style={{justifyContent:'space-evenly',alignItems:'center'}}>

                 <CardItem button style={{elevation:1,backgroundColor:'lightgray',opacity:0.8}}>
                  <Icon name= {item.gender === 'Male' || item.gender === 'male' || item.gender === 'm' || item.gender === 'M' ? 'gender-male' : 'gender-female'} type='MaterialCommunityIcons' style={{ color: item.gender === 'Male' || item.gender === 'male' ? '#0d0514' : '#ED4A6A'}} />
                  <Text>{item.gender}</Text>
                </CardItem>
  
                  
                <CardItem button style={{elevation:1,backgroundColor:'lightgray',opacity:0.8}}>
                  <Icon name="sort-amount-up" type="FontAwesome5" style={{color:item.gender === 'Male' || item.gender === 'male' || item.gender === 'm' || item.gender === 'M' ? '#0d0514' : '#ED4A6A'}} />
                  <Text>{item.age}</Text>
                </CardItem>
                  
                <CardItem button style={{elevation:1,backgroundColor:'lightgray',opacity:0.8}}>
                  <Icon name="drop" type="Entypo" style={{ color:item.gender === 'Male' || item.gender === 'male' || item.gender === 'm' || item.gender === 'M' ? '#0d0514' : '#ED4A6A' }} />
                  <Text >{item.bloodgrp}</Text>
                </CardItem>
                  
                </CardItem>
                {'Home',console.log(props)
               }
                 </Card> 
                   
            }
            /> 
            </View>
  
        </Content>

    </Container>

  );
}

const styles = StyleSheet.create({
    themetextcolor : { 
        color:'white'
        
    }
})

function mapStateToProp(state){
return ({
    state,
})
}

function mapDispatchToProp(dispatch){
    return ({
        update : (props)=>{dispatch(CuSaver(props)) }
    })
    }
    
export default connect(mapStateToProp,mapDispatchToProp)(Home);

