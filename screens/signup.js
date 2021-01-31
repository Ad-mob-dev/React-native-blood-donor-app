import React,{useState} from 'react';
import { Card, CardItem, Container, Content, Icon, Separator, Text, Thumbnail ,Button, Item, Label} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';
import gstyles from './styles/global';
import { TextInput } from 'react-native';
import {connect} from 'react-redux';
import {SignUpWithEmail} from '../store/actions/action';

function SignUp(props) {
    const [emailR,setEmailR] = useState(null);
    const [passR,setPassR] = useState(null);
    return (

        <Container>
            {console.log('sup',props)}
            <Content style={{backgroundColor:'lightgray'}}>
                <Card style={gstyles.card}>
                    <CardItem header style={{justifyContent:'center',alignItems:'center' ,flexDirection:'column'}}>
                        <Thumbnail circular large style={{marginTop:40,marginBottom:15}} source={require('../assets/logo.jpg')}/>
                        <Separator style={{width:'30%',height:2,backgroundColor:'transparent',margin:4}}/>
                        <Text selectable={true} suppressHighlighting={true} style={{fontSize:24,fontWeight:'bold'}}>Donor's Dock</Text>
                        <Separator style={{width:'30%',height:1,backgroundColor:'transparent'}}/>
                        <Text style={{fontSize:15}}>A Perfect Place for Blood Donor's</Text>
                    </CardItem>

                    <CardItem cardBody style={gstyles.cardBody} >
                      <CardItem style={{flexDirection:'column',width:"100%"}}>
                    {/* email Input */}
                        <Item bordered fixedLabel  style={{width:'95%',marginTop:10,alignSelf:'center'}}>
                        <Icon style={gstyles.inputicn} name='user' type='AntDesign'/>
                          <TextInput 
                          value={emailR}
                          onChangeText={(e)=>setEmailR(e)}
                          keyboardType='email-address' 
                          autoCapitalize='words'
                          autoCompleteType='email'
                          enablesReturnKeyAutomatically={true}
                          importantForAutofill='yes'
                          placeholder="Enter your email"
                          secureTextEntry={true}
                          selectionColor="lightgray"
                          returnKeyLabel='Next'
                          returnKeyType='next'
                          style={{width:'90%'}}
                          />
                          </Item>
                        {/*space in Inputs  */}
                        <Separator style={{width:0,height:15,backgroundColor:'transparent'}}/>
                    {/* Pass Input */}
                        <Item bordered fixedLabel  style={{width:'95%',marginTop:30,marginBottom:20,alignSelf:'center'}}>
                          <Icon style={gstyles.inputicn} name='key' type='AntDesign'/>
                          <TextInput 
                          value={passR}
                          onChangeText={(e)=>setPassR(e)}
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
                        block
                        androidRippleColor="red"
                        onMagicTap={()=>{}}
                        style={gstyles.socialloginbtn}
                        onPress={()=>props.signupemail(emailR,passR,props)}
                        >
                            <Text style={gstyles.sociallogintxt}>Sign up</Text>
                        </Button>

                        <Item style={{borderWidth:0,borderColor:'transparent',marginTop:10}}>
                        <Text style={{fontWeight:'100',fontSize:11}}>Already Registered? </Text>
                        <TouchableOpacity activeOpacity={0} onPress={()=>{props.navigation.navigate('Sign In')}}><Text style={{fontSize:12,color:'royalblue'}}>Sign in</Text></TouchableOpacity>
                        </Item>

                        
                      </CardItem>
                    </CardItem>

                </Card>
            </Content>

        </Container>



    )
}

const matchStateToProp = (state) =>{
return({
    state,
})
}

const matchDispatchToProp = (dispatch) =>{
    return({
        signupemail : (email,password,props)=>{dispatch(SignUpWithEmail(email,password,props))},
    })
    }
    
export default connect(matchStateToProp,matchDispatchToProp)( SignUp);
