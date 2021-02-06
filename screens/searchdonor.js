import React ,{useState}from 'react';
import {Header,Button,Item,Icon,Input,Container,Thumbnail,Text, Separator, ListItem,Right, Content} from 'native-base';
import { connect } from 'react-redux';
import { QueryDb } from '../store/actions/action';
import { FlatList } from 'react-native-gesture-handler';
import {TouchableOpacity,ImageBackground,Linking} from 'react-native';


function SearchDonor(props) {
    const [searchval,setsearchval] = useState(null);
  
    
  return (
    <>
<Container>
        <Header searchBar rounded style={{backgroundColor:'black',opacity:1}}>
          <Item>
            <TouchableOpacity onPress={()=>{props.navigation.openDrawer()}}>
            <Icon name='menu' />
            </TouchableOpacity>
            <Input  returnKeyType='search' autoCapitalize='characters' value={searchval} placeholder="Type Blood Group To Search" onChangeText={(e)=>props.searchdb(e)} />
            <Icon name="ios-search" />
          </Item>

          <Button transparent>

            <Text>Search</Text>
          </Button>
        </Header>
          <FlatList 
             ItemSeparatorComponent = {()=>{
              return <Separator style={{height:2}}/>
          }}
       
            data={props.state.search}
            keyExtractor = {(item, index) => index.toString()}
            key={(item)=> item.key}
            ListEmptyComponent = { ()=>{
              return <Text style={{alignSelf:'center',marginTop:300}}>You've not Searched Anything Yet</Text>
            }}
            renderItem={({item})=>{
              return props.state.search.length >= 0 ?
                  <ListItem avatar={true} style={{justifyContent:'flex-start',padding:5}}>
                    <Thumbnail circular={true} source={{uri:item.photo,}} style={{height:50,width:50,marginRight:10,borderRadius:200}}/>
                      <Text style={{color:'black',overflow:'hidden'}}>{item.name.substring(0,10)}</Text>
                    <ImageBackground  source={require('../assets/bgif.png')} resizeMode="stretch" style={{width:40,height:48,marginLeft:'auto',marginRight:10,alignItems:'center',justifyContent:'center',color:'white'}}>
                    <Text style={{textAlign:'center',color:'white',fontSize:15,marginTop:7,fontWeight:'bold'}}>{item.bloodgrp}</Text>
                    </ImageBackground>

                  <Item style={{borderWidth:0,borderColor:'transparent'}}>
                    <Icon name="mail" type="Octicons" style={{ color:item.gender === 'Male' || item.gender === 'male' || item.gender === 'm' || item.gender === 'M'? '#0d0514' : '#ED4A6A',fontSize:30,textAlign:'center'}} 
                  onPress={()=>{Linking.openURL(`mailto:${item.email}`)}}
                  />
                    <Icon name="phone" type='MaterialIcons' style={{ color:'orange',fontSize:30,textAlign:'center'}} 
                  onPress={()=>{Linking.openURL(`tel:${item.phone}`)}}
                   />
                     <Icon name="whatsapp" type='FontAwesome' style={{ color:'green',fontSize:30,textAlign:'center'}} 
                  onPress={()=>{Linking.openURL(`whatsapp://send?text= Hello Dear ( ${item.name} ), I Hope you're Fine !! I've Found you on Donor's Dock with location ( ${item.location} ),I need ( ${item.bloodgrp} ) blood type urgently.. Can you help ?? &phone= ${item.phone}`)}}
                  />
                  </Item>

                  </ListItem> 
:  null





            }}
            />
      </Container>
    </>
  );
  
}


function mapStateToProp(state){
    return{
        state,
    }
}

function mapDispatchToProp(dispatch){
    return{
        searchdb : (searchval)=>{dispatch(QueryDb(searchval))}
    }
}

export default connect(mapStateToProp,mapDispatchToProp)(SearchDonor)
