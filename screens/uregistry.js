import {Card,CardItem,Container,Content,Icon, Separator,Text,Thumbnail,Button,Item} from 'native-base';
import React, {useState,useRef} from 'react';
import {connect} from 'react-redux';
import gstyles from './styles/global';
import {TextInput,ImageBackground,ActivityIndicator,View, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {StoreToDB} from '../store/actions/action';
import {launchImageLibrary} from 'react-native-image-picker';
import {firebase} from '@react-native-firebase/storage';
  
export function Uregistry (props) {
  
  const [userx, setuserx] = useState(props.state.guser)
  const {name,id,age,gender,location,bloodgrp,email,photo,emailV,creation,phone}= userx;
  const [editableStatusna,setEditableStatusna]= useState(false);
  const [editableStatusem,setEditableStatusem]= useState(false);
  const [editableStatusag,setEditableStatusag]= useState(false);
  const [editableStatusph,setEditableStatusph]= useState(false);
  const [editableStatusbl,setEditableStatusbl]= useState(false);
  const [editableStatusgd,setEditableStatusgd]= useState(false);
  const [editableStatusloc,setEditableStatusloc]= useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const ageRef = useRef();
  const phoneRef = useRef();  
  const bloodRef = useRef();
  const genderRef = useRef();
  const locationRef = useRef();


  const [isLoading,setLoading] = useState(false);
  const [isImgLoading,setImgLoading] = useState(false);
  
  const setload = (data)=>{
      setLoading(data);
  }

  const options = {
    title: 'Select Avatar',
    mediaType : 'photo',
    maxWidth: 500,
    maxHeight:500,
    customButtons: [{ name: 'upload photo', title: 'Choose Photo from Gallery' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  }

function selectImage(){
  setImgLoading(true)
  launchImageLibrary(options,(response)=>{
    var imgRef = firebase.storage().ref('Images/'+props.state.guser.id);
    if(response.didCancel){
      setImgLoading(false);
      Alert.alert("Status",'You"ve Canceled the Image Upload Request ')
    }else if(response.errorCode){
      setImgLoading(false);
      Alert.alert("Image Picker Error"+response.errorCode,response.errorMessage)
    }else{
     imgRef.putFile(response.uri).then( async (data)=>{
       let url = await imgRef.getDownloadURL()
       
        setuserx({...userx,photo:url})
        setImgLoading(false)
     
        Alert.alert('Media Ready','Your Profile Picture is Ready to Upload')
     
       }).catch( 
         (e)=>{
          setImgLoading(false)

          Alert.alert("ERROR",`Code :${e.code +' Message:'+ e.message}`)
         });
      
    }

 

  })
}

  return (

    <Container>
      {isLoading? ( <ActivityIndicator
             color='red'
                size='large'
                style={{marginTop:300}}/> ) :
    ( <Content style={{backgroundColor:'gray'}}>
        <Card style={gstyles.card}>
          <CardItem bordered  header style={{justifyContent:'center',alignItems:'center' ,flexDirection:'column'}}>
              <ImageBackground source={{uri:photo}} style={{width:'100%',height:150}} resizeMethod='auto' resizeMode='cover'>  
               
              <TouchableOpacity  style={{alignSelf:'flex-end',backgroundColor:'white',borderRadius:10,padding:3}} onPress={()=>{selectImage()}}><Icon name='camera-retro' type="FontAwesome" style={{color:'black',fontSize:20,textAlign:'center'}} /></TouchableOpacity>
              {isImgLoading? <ActivityIndicator
             color='red'
                size='large'
                style={{height:100,width:100,backgroundColor:'lightgray',alignSelf:'center', borderWidth:2.5,borderColor:'white'}}
                /> :
              <Thumbnail large style={{height:100,width:100,resizeMode:'contain', borderWidth:2.5,borderColor:'white',alignSelf:'center'}} source={{uri:photo}}/>
              }
              <Separator style={{width:'30%',height:2,backgroundColor:'transparent',margin:4,}}/>
              </ImageBackground>
          </CardItem>
        <CardItem bordered  cardBody style={{flexDirection:'column',justifyContent:'space-around',alignItems:'center'}}>
        {/* name */}
        <Item rounded style={{marginBottom:5,marginTop:5}}>
                <Icon style={gstyles.inputicn} name='user' type='AntDesign'/>
                  <TextInput 
                  ref={nameRef}
                  value={name}
                  editable ={editableStatusna}
                  onChangeText={(e)=>{setuserx({ ...userx, name : e})}}
                  keyboardType='name-phone-pad'
                  importantForAutofill='auto' 
                  autoCapitalize="words"
                  autoCorrect={true}
                  autoCompleteType='name'
                  enablesReturnKeyAutomatically={true}
                  placeholder="Enter your name"
                  selectionColor="lightgray"
                  returnKeyLabel='Next'
                  returnKeyType='next'
                  style={{width:'75%'}}
                  onEndEditing ={()=>{setEditableStatusna(false)}}
                  />
                  <TouchableOpacity onPress={()=>{
                    setEditableStatusna(true)
                    nameRef.current.focus()
                    }}>

                  <Icon style={gstyles.inputicnr} name='plus' type='FontAwesome'/>
   
                  </TouchableOpacity>        
         </Item>
         <Separator style={{height:10,backgroundColor:'transparent'}}/>
         {/* age */}
         <Item rounded style={{marginBottom:5}}>
                <Icon style={gstyles.inputicn} name='chevron-triple-up' type='MaterialCommunityIcons'/>
                  <TextInput 
                  ref={ageRef}
                  value={age}
                  onChangeText={(e)=>{setuserx({...userx,age:e})}}
                  editable ={editableStatusag}
                  keyboardType='decimal-pad' 
                  enablesReturnKeyAutomatically={true}
                  importantForAutofill='auto'
                  placeholder="Enter your Age"
                  selectionColor="lightgray"
                  returnKeyLabel='Next'
                  returnKeyType='next'
                  style={{width:'75%'}}
                  onEndEditing ={()=>{setEditableStatusag(false)}}
                  />

                  
                  <TouchableOpacity onPress={()=>{
                    setEditableStatusag(true)
                    ageRef.current.focus()
                 }}>
                  <Icon style={gstyles.inputicnr} name='plus' type='FontAwesome'/>
   
                  </TouchableOpacity>        
         </Item>
         <Separator style={{height:5,backgroundColor:'transparent'}}/>
         {/* gender */}
         <Item rounded style={{marginBottom:5}}>
                <Icon style={gstyles.inputicn} name='transgender-outline' type='Ionicons'/>
                  <TextInput 
                  maxLength={11}
                  ref={genderRef}
                  value={gender}
                  editable ={editableStatusgd}
                  onChangeText={(e)=>{setuserx({...userx,gender:e})}}
                  keyboardType='email-address' 
                  autoCapitalize='words'
                  enablesReturnKeyAutomatically={true}
                  placeholder="Enter your Gender"
                  selectionColor="lightgray"
                  returnKeyLabel='Next'
                  returnKeyType='next'
                  style={{width:'75%'}}
                  onEndEditing ={()=>{setEditableStatusgd(false)}}
                  />
                  
                  <TouchableOpacity onPress={()=>{
                    setEditableStatusgd(true)
                    genderRef.current.focus()

                  }}>

                  <Icon style={gstyles.inputicnr} name='plus' type='FontAwesome'/>
   
                  </TouchableOpacity>        

                  </Item>
          <Separator style={{height:5,backgroundColor:'transparent'}}/>
          {/* Location */}
          <Item rounded style={{marginBottom:5}}>
                <Icon style={gstyles.inputicn} name='location-pin' type='SimpleLineIcons'/>
                  <TextInput 
                  ref={locationRef}
                  value={location}
                  editable ={editableStatusloc}
                  onChangeText={(e)=>{setuserx({...userx,location:e})}}
                  keyboardType='email-address' 
                  autoCapitalize='words'
                  autoCompleteType='street-address'
                  importantForAutofill='yes'
                  enablesReturnKeyAutomatically={true}
                  placeholder="Area City Country"
                  selectionColor="lightgray"
                  returnKeyLabel='Next'
                  returnKeyType='next'
                  style={{width:'75%'}}
                  onEndEditing ={()=>{setEditableStatusloc(false)}}
                  />
                  
                  <TouchableOpacity onPress={()=>{
                    setEditableStatusloc(true)
                    locationRef.current.focus()

                  }}>

                  <Icon style={gstyles.inputicnr} name='plus' type='FontAwesome'/>
   
                  </TouchableOpacity>        

                  </Item>
          <Separator style={{height:5,backgroundColor:'transparent'}}/>
        {/* mail */}
        <Item rounded style={{marginBottom:5}}>
                <Icon style={gstyles.inputicn} name='mail' type='AntDesign'/>
                  <TextInput 
                  ref={emailRef}
                  value={email}
                  editable ={editableStatusem}
                  keyboardType='name-phone-pad' 
                  autoCapitalize='none'
                  autoCompleteType='email'
                  enablesReturnKeyAutomatically={true}
                  importantForAutofill='auto'
                  placeholder="Enter your email"
                  selectionColor="lightgray"
                  returnKeyLabel='Next'
                  returnKeyType='next'
                  style={{width:'75%'}}
                  onEndEditing ={()=>{setEditableStatusem(false)}}
                  />
                  
                  <TouchableOpacity onPress={()=>{
                    setEditableStatusem(false)
                    emailRef.current.focus()

                  }}>

                  <Icon style={gstyles.inputicnr} name='plus' type='FontAwesome'/>
   
                  </TouchableOpacity>        

                  </Item>
        <Separator style={{height:5,backgroundColor:'transparent'}}/>
        {/* phone */}
        <Item rounded style={{marginBottom:5}}>
         <Icon style={gstyles.inputicn} name='phone' type='AntDesign'/>
         <TextInput 
         maxLength={13}
          ref={phoneRef}
          value={phone}
          onChangeText={(e)=>{setuserx({...userx,phone:e})}}
          keyboardType='phone-pad' 
          editable ={editableStatusph}
          autoCapitalize='none'
          autoCompleteType='tel'
          enablesReturnKeyAutomatically={true}
          importantForAutofill='auto'
          placeholder="+92-xxx-xxxxxxx"
          selectionColor="lightgray"
          returnKeyLabel='Next'
          returnKeyType='next'
          style={{width:'75%'}}
          onEndEditing ={()=>{setEditableStatusph(false)}}
          />
                  
                  
          <TouchableOpacity onPress={()=>{
          setEditableStatusph(true)
          phoneRef.current.focus()
          }}>
          
          <Icon style={gstyles.inputicnr} name='plus' type='FontAwesome'/>
          </TouchableOpacity>        
          </Item>
          <Separator style={{height:5,backgroundColor:'transparent'}}/>
                {/* bloodgrp */}
                <Item rounded style={{marginBottom:5}}>
                <Icon style={gstyles.inputicn} name='blood' type='Fontisto'/>
                  <TextInput 
                  maxLength={3}
                  ref={bloodRef}
                  value={bloodgrp}
                  onChangeText={(e)=>{setuserx({...userx,bloodgrp:e})}}
                  keyboardType='name-phone-pad'
                  editable ={editableStatusbl} 
                  autoCapitalize='characters'
                  enablesReturnKeyAutomatically={true}
                  importantForAutofill='auto'
                  placeholder="Enter your Blood type"
                  secureTextEntry={true}
                  selectionColor="lightgray"
                  returnKeyLabel='Next'
                  returnKeyType='next'
                  style={{width:'75%'}}      
                  onEndEditing ={()=>{setEditableStatusbl(false)}}
                  />
                  
                  
                  <TouchableOpacity onPress={()=>{
                    setEditableStatusbl(true)
                    bloodRef.current.focus()

                    }}>

                  <Icon style={gstyles.inputicnr} name='plus' type='FontAwesome'/>
   
                  </TouchableOpacity>        
                  </Item>
        <Separator style={{height:5,backgroundColor:'transparent'}}/>         
        </CardItem>

        <CardItem bordered footer style={gstyles.cardBody} >
          <CardItem style={{flexDirection:'column',width:"100%"}}>
            <Button dark 
            rounded
            full                       
          disabled={((photo === null || photo === '') || (age === null|| age === '') || (name === null || name === '') || (location === '' || location === null || (email === null || email === '') || (phone === null || phone === ''||phone.length > 13 ) || (bloodgrp !== 'A+' && bloodgrp !== 'A-' && bloodgrp !== 'B-' && bloodgrp !== 'B+' && bloodgrp !== 'AB-' && bloodgrp !== 'AB+' && bloodgrp !== 'O-'&& bloodgrp !== 'O+')||(gender !== 'M' && gender !== 'm' && gender !== 'Male'  &&  gender !== 'F' && gender !== 'f' && gender !== 'Female' ))? true :false)}
          androidRippleColor="red"
            style={gstyles.socialloginbtn}
            onPress={()=>{
             props.db(userx,props,setload) }}
            >
                <Text style={gstyles.sociallogintxt}>Update Profile</Text>
            </Button>
         </CardItem>
        </CardItem>
    </Card>
    </Content>
    )
  }



</Container>

    
    )
}

const mapStateToProps = (state) => {
  return({
    state,
})
}

const mapDispatchToProps = (dispatch) => {
  return({
    db : (userx,props,setload)=>{ dispatch(StoreToDB(userx,props,setload)) },
})
}

export default connect(mapStateToProps,mapDispatchToProps)(Uregistry);