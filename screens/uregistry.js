  import { Card, CardItem,Container, Content, Icon, Separator, Text, Thumbnail ,Button, Item, Label} from 'native-base';
import React, { useEffect,useState,useRef} from 'react';
import { connect } from 'react-redux';
import gstyles from './styles/global';
import {TextInput,ImageBackground} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StoreToDB } from '../store/actions/action';


  
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


  return (

    <Container>
      <Content style={{backgroundColor:'gray'}}>
    <Card style={gstyles.card}>
        <CardItem bordered  header style={{justifyContent:'center',alignItems:'center' ,flexDirection:'column'}}>
      <ImageBackground source={{uri:photo}} style={{width:'100%',height:150,}} resizeMethod='auto' resizeMode='repeat'>
          <Thumbnail circular large style={{height:100,width:100,marginTop:25,borderWidth:2.5,borderColor:'white',alignSelf:'center'}} source={{uri:photo}}/>
          <Separator style={{width:'30%',height:2,backgroundColor:'transparent',margin:4,}}/>
          </ImageBackground>
       
      
        </CardItem>
        <CardItem bordered  cardBody style={{flexDirection:'column',justifyContent:'space-around',alignItems:'center'}}>
        {/* name */}
        <Item rounded>
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
                  style={{width:'80%'}}
                  onEndEditing ={()=>{setEditableStatusna(false)}}
                  />
                  <TouchableOpacity onPress={()=>{
                    setEditableStatusna(true)
                    nameRef.current.focus()
                    }}>

                  <Icon style={gstyles.inputicnr} name='plus' type='FontAwesome'/>
   
                  </TouchableOpacity>        
         </Item>
         <Separator style={{height:5,backgroundColor:'transparent'}}/>
         {/* age */}
         <Item rounded>
                <Icon style={gstyles.inputicn} name='history' type='FontAwesome'/>
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
                  style={{width:'80%'}}
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
         <Item rounded>
                <Icon style={gstyles.inputicn} name='mail' type='AntDesign'/>
                  <TextInput 
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
                  style={{width:'80%'}}
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
          <Item rounded>
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
                  style={{width:'80%'}}
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
        <Item rounded>
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
                  style={{width:'80%'}}
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
        <Item rounded>
         <Icon style={gstyles.inputicn} name='phone' type='AntDesign'/>
         <TextInput 
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
          style={{width:'80%'}}
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
                <Item rounded>
                <Icon style={gstyles.inputicn} name='heart-o' type='FontAwesome'/>
                  <TextInput 
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
                  style={{width:'80%'}}      
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
            disabled={((photo === null || photo === '') ||(bloodgrp === null || bloodgrp === '' || bloodgrp.length > 3) || (age === null || age === '') || (name === null || name === '') || (email === null || email === '') || (phone === null || phone === '' || phone.length > 13 ) )? true : false}
            androidRippleColor="red"
            style={gstyles.socialloginbtn}
            onPress={()=>{
             props.db(userx,props) }}
            >
                <Text style={gstyles.sociallogintxt}>Update Profile</Text>
            </Button>
         </CardItem>
        </CardItem>
    </Card>
</Content>



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
    db : (userx,props)=>{ dispatch(StoreToDB(userx,props)) },
})
}

export default connect(mapStateToProps,mapDispatchToProps)(Uregistry);