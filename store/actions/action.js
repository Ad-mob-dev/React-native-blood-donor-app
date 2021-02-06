import { Alert, LogBox } from 'react-native';
import {GoogleSignin} from '@react-native-community/google-signin';
import database from '@react-native-firebase/database';
import auth, { firebase } from '@react-native-firebase/auth';
LogBox.ignoreLogs(['Setting a timer for a long period of time'])
import ActionTypes from '../constants/constant';


export  function SignUpWithEmail (email,password,props){
    const {users} = props.state;   
    
    return async (dispatch)=>{

    await firebase.auth().createUserWithEmailAndPassword(email,password).then((user)=>{
            user = user.user;       
            const guser = {
                        name : user.displayName,
                        id : user.uid,
                        age: null,
                        bloodgrp :null,
                        email : user.email,
                        photo : 'https://www.washingtonfirechiefs.com/Portals/20/EasyDNNnews/3593/img-blank-profile-picture-973460_1280.png',
                        emailV : user.emailVerified,
                        creation : Date.now(),
                        phone : user.phoneNumber,
                        gender : null,
                        location: null,
                    }
                     const filtereduser = users.filter((v)=> v.id === guser.id);
                    dispatch({type:ActionTypes.authState,payload:guser})

                    if(filtereduser.length <= 0){
                    console.log('filtered',filtereduser)
                        props.navigation.navigate('UserRegistry')
    
                    }else{
    
                        props.navigation.navigate('Home')
                     }
                 
                
    }).catch( 
            (e)=>{
                props.navigation.navigate('Sign In');
                 Alert.alert("ERROR",`Code :${e.code +' Message:'+ e.message}`)
                });
     
    }
}

export function LoginWithEmail (email,password,props,setload){
    const {users} = props.state;  
    setload(true) 
    return (dispatch)=>{
        firebase.auth().signInWithEmailAndPassword(email,password).then((user)=>{
                user = user.user;       
                const guser = {
                            name : user.displayName,
                            id : user.uid,
                            age: null,
                            bloodgrp :null,
                            email : user.email,
                            photo : user.photo,
                            emailV : user.emailVerified,
                            creation : Date.now(),
                            phone : user.phoneNumber,
                            gender : null,
                            location: null,
                        }
                       
                        const filtereduser = users.filter((v)=> v.id === guser.id);
                      dispatch({type:ActionTypes.authState,payload:guser})

                        if(filtereduser.length <= 0){
                            setload(false)
                            props.navigation.navigate('UserRegistry')
        
                        }else{
                            setload(false)
                            props.navigation.navigate('Home')
                         }
                     
                    
        }).catch( 
                (e)=>{
                    setload(false)
                    props.navigation.navigate('Sign In');
                     Alert.alert("ERROR",`Code :${e.code +' Message:'+ e.message}`)
                    });
    }
}


//1 all from db and stores to store
export function getUsers(){
    return (dispatch)=>{

        firebase.database().ref('users/').orderByChild('name').once('value',async (v) => {
            v.forEach((value) => {
              dispatch({ type: ActionTypes.getUsers, payload: { new: value.val() } });
            });
        })
}
}

//2 
export function SignInGoogle(props,setload){  
    const {users} = props.state;   
    setload(true)
    return async (dispatch)=>{
        
        GoogleSignin.hasPlayServices();
        await GoogleSignin.signIn().then((data)=>{        
            const credential = auth.GoogleAuthProvider.credential(data.idToken);
        firebase.auth().signInWithCredential(credential).then((user)=>{
            user = user.user;       
            const guser = {
                        name : user.displayName,
                        id : user.uid,
                        age: null,
                        bloodgrp :null,
                        email : user.email,
                        photo : user.PhotoURL,
                        emailV : user.emailVerified,
                        creation : Date.now(),
                        phone : user.phoneNumber,
                        gender : null,
                        location: null,
                    }
                
                    const filtereduser = users.filter((v)=> v.id === guser.id);
                    dispatch({type:ActionTypes.authState,payload:guser})

                    if(filtereduser.length <= 0){
                        setload(false)
                        props.navigation.navigate('UserRegistry')
    
                    }else{
                        setload(false);
                        props.navigation.navigate('Home')
                     }
                 

              
          }).catch( 
            (e)=>{
                setload(false)
             Alert.alert("ERROR",`Code :${e.code +' Messagex:'+ e.message}`)
            });             
          }).catch( 
                    (e)=>{
                        setload(false)
                              Alert.alert("ERROR",`Code :${e.code +' Message:'+ e.message}`)
                    });
        
        
        
        
        
          
    }
}
     
export function StoreToDB(user,props,setload){
    setload(true)
    return (dispatch)=>{
  database().ref('users/').child(user.id).set(user).then(
     ()=>{ 
        dispatch({type: ActionTypes.StoreToDB,payload:user})
        Alert.alert('Congratulations','profile Updated Successfully')
        props.navigation.navigate('Home');
        setload(false)

    }
).catch((e)=>{ 
    
    setload(false)
    Alert.alert(e.code,e.message)})

    }
    
}


export function SignOut(props){
    return (dispatch)=>{
        if (auth().currentUser.emailVerified === false){
          auth().signOut().then(()=>{
            Alert.alert('Logged Out','User Successfully Logged Out');            
             dispatch({type:ActionTypes.SIGNOUT,payload :{}})
            props.nav.navigation.replace('Sign In');

        }).catch( 
            (e)=>{
             Alert.alert("ERROR",`Code :${e.code +' Message:'+ e.message}`)
            });    
        }else{
         GoogleSignin.revokeAccess();
         GoogleSignin.signOut().then(()=>{
            Alert.alert('Logged Out','User Successfully Logged Out');
            dispatch({type:ActionTypes.SIGNOUT,payload :{}})
            props.nav.navigation.replace('Sign In');

        }).catch( 
            (e)=>{
             Alert.alert("ERROR",`Code :${e.code +' Message:'+ e.message}`)
            }); 
        }

    }
}

export function CuSaver(props){
    const {users} = props.state;
    return (dispatch)=>{
     users.map((v)=>{
        
        if(v.id === props.state.guser.id)
        {     
            dispatch({type:ActionTypes.updateUser,payload : v})

        }

    })

        
        }
} 



export function QueryDb(val) {
    return (dispatch) => {
    database().ref('users/').on('value', (snap) => {
        const search = []
          console.log(snap.numChildren())
          Object.values(snap.val()).filter((v)=>{
              if(v.bloodgrp === val){
                  search.push(v);
             const filtered = dispatch({type:ActionTypes.QUERYDB,payload:search})
              }else if(val === '' || val === null){
                  search.forEach ((v)=>{
                      search.pop(v)
            
                    })
                    const filtered = dispatch({type:ActionTypes.QUERYDB,payload:search })
            
                }
          })
        })
    }
}

export function clear(){
    return (dispatch) =>{
        dispatch({type:ActionTypes.CLEAR_USERS,payload:{}})


    }
}