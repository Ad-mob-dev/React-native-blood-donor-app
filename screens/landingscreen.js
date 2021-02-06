import React,{useEffect} from 'react';
import { Card, CardItem, Container, Content, Icon, Separator, Text, Thumbnail ,Button, Item, Label} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';
import gstyles from './styles/global';
import { ActivityIndicator, Alert, TextInput } from 'react-native';
import { useState } from 'react/cjs/react.development';
import {connect} from 'react-redux';
import {getUsers,LoginWithEmail, SignInGoogle,clear} from '../store/actions/action';
import { GoogleSignin, GoogleSigninButton} from '@react-native-community/google-signin';
import { set } from 'react-native-reanimated';
import SplashScreen from 'react-native-splash-screen'

function LandingScreen(props) {
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const [isLoading,setLoading] = useState(false);
    useEffect(() => {
        GoogleSignin.configure({
            webClientId : '318070767985-svfrp494vlibl53ddea25a028hjkpq0q.apps.googleusercontent.com',
            offlineAccess:true,
            forceCodeForRefreshToken : true,

        })
        SplashScreen.hide();


        if(props.state.users.length <= 0)
        {
            props.getdbusers();
            console.log('fetching users')
            setLoading(true);
        }
        setTimeout(()=>{setLoading(false)},3000)
        return ()=>{
            props.clearusers();
        }

       },[])

    
const setload = (data)=>{
    setLoading(data);
}
    return (
        
        <Container>
            {console.log(props.state.users.length,'props',props)}
            {isLoading ? ( 
            
                <ActivityIndicator

             color='red'
                size='large'
                style={{marginTop:300}}/> ) :(
                    <Content style={{backgroundColor:'lightgray'}}>
                    <Card style={gstyles.card}>
                    <CardItem header style={{justifyContent:'center',alignItems:'center' ,flexDirection:'column'}}>
                        <Thumbnail circular large style={{marginTop:0,marginBottom:10,width:200,height:200}} source={require('../assets/connect.png')}/>
                        <Separator style={{width:'30%',height:2,backgroundColor:'transparent',margin:4}}/>
                        <Text selectable={true} suppressHighlighting={true} style={{fontSize:24,fontWeight:'bold'}}>Donor's Dock</Text>
                        <Separator style={{width:'30%',height:1,backgroundColor:'transparent'}}/>
                        <Text style={{fontSize:15}}>A Perfect Place for Blood Donor's</Text>
                    </CardItem>
                    <CardItem cardBody style={gstyles.cardBody} >
                    {/* email Input */}
                        <Item bordered fixedLabel  style={{width:'95%',marginTop:20,alignSelf:'center'}}>
                        <Icon style={gstyles.inputicn} name='user' type='AntDesign'/>
                          <TextInput 
                          value={email}
                          onChangeText={(e)=>setEmail(e)}
                          keyboardType='email-address' 
                          autoCapitalize='none'
                          autoCompleteType='email'
                          enablesReturnKeyAutomatically={true}
                          importantForAutofill='yes'
                          placeholder="Enter your email"
                          selectionColor="lightgray"
                          returnKeyLabel='Next'
                          returnKeyType='next'
                          style={{width:'90%'}}
                          />
                          </Item>

                        {/* Pass Input */}
                        <Item bordered fixedLabel  style={{width:'95%',marginTop:30,marginBottom:30,alignSelf:'center'}}>
                          <Icon style={gstyles.inputicn} name='key' type='AntDesign'/>
                          <TextInput 
                          value={pass}
                          onChangeText={(e)=>setPass(e)}
                          autoCapitalize='none'
                          autoCompleteType='password'
                          enablesReturnKeyAutomatically={true}
                          importantForAutofill='yes'
                          placeholder="Enter your Password"
                          secureTextEntry={true}
                          selectionColor="lightgray"
                          returnKeyLabel='Login'
                          returnKeyType='send'
                          style={{width:'90%'}}
                          />
                          </Item>

                        <Button dark 
                        rounded
                        full
                        androidRippleColor="red"
                        style={gstyles.socialloginbtn}
                        onPress={()=>{
                           if(email !== '' && pass !==""){
                            
                            props.loginemail(email,pass,props,setload)
                           }else if(pass ===""){
                               return Alert.alert('Empty Password Error','Password Field is Empty')
                           }else if(email ===""){
                            return Alert.alert('Empty Email Error','Email Field is Empty')
                        }else{
                            return Alert.alert('Empty Email/Pass Error','Email & Pass Fields are Empty')
                        }
                        }
                        }
                        >
                            <Text style={gstyles.sociallogintxt}>Sign in</Text>
                        </Button>

                        <Text style={{margin:15,fontWeight:'100',fontSize:13,marginTop:15,alignSelf:'center'}}>OR</Text> 
                        
                        <Item style={{borderWidth:0,borderColor:'transparent'}}>
                           {/* google */}  
                           <GoogleSigninButton
                           size={GoogleSigninButton.Size.Wide} 
                           color={GoogleSigninButton.Color.Dark}
                           style={{width:"87%"}}  
                           onPress={()=>{props.google(props,setload)}}
                           />                         
                       </Item>

                        <Item style={{borderWidth:0,borderColor:'transparent',marginTop:10}}>
                        <Text style={{fontWeight:'100',fontSize:11}}>Not yet registered? </Text>
                        <TouchableOpacity activeOpacity={0} onPress={()=>{props.navigation.navigate('Sign Up')}}><Text style={{fontSize:12,color:'royalblue'}}>Sign up</Text></TouchableOpacity>
                        </Item>
                    </CardItem>
                </Card>     
                </Content>
                )
            }

        </Container>



    )
}

const mapStateToProp = (state)=>{
    return({
        state,
    })
}

const mapDispatchToProp = (dispatch)=>{
    return({
        google : (props,setload)=>{ dispatch(SignInGoogle(props,setload))},
        getdbusers: ()=>{dispatch(getUsers())},
        loginemail : (email,pass,props,setload)=>{dispatch(LoginWithEmail(email,pass,props,setload))},
        clearusers : ()=>{dispatch(clear())},
    })
}
export default connect(mapStateToProp,mapDispatchToProp)(LandingScreen);
