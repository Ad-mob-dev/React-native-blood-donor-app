import { Alert, LogBox } from 'react-native';
import {GoogleSignin} from '@react-native-community/google-signin';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
LogBox.ignoreLogs(['Setting a timer for a long period of time'])
import ActionTypes from '../constants/constant';

export function ChangeName (){
    const names = {
        name : 'khan',
    }
    return (dispatch ) => { dispatch({type:ActionTypes.welcome, payload:names})}
}

export  function SignUpWithEmail (email,password,props){
    return async (dispatch)=>{
       await auth().createUserWithEmailAndPassword(email,password).then((user)=>{
              auth().onAuthStateChanged((user)=>{
            if (user){
                const {users} = props.state;   

                const guser = {
                    name : user.displayName,
                    id : user.uid,
                    age: null,
                    bloodgrp :null,
                    email : user.email,
                    photo : 'https://api.multiavatar.com/'+user.displayNname+'.png',
                    emailV : user.emailVerified,
                    creation : user.metadata.creationTime,
                    phone : user.phoneNumber,
                    gender : null,
                    location: null,
                }
                const filtereduser = users.filter((v)=> v.id === guser.id);
                 if(filtereduser.length <= 0){
                   
                    dispatch({type:ActionTypes.authState,payload:guser})
                    // props.navigation.navigate('UserRegistry')

                }else{

                    props.navigation.navigate('Home')
                 }
             
            }else{
                props.navigation.navigate('Sign In');
            }
              
    
                 })
 
    
    
    }).catch( 
            (e)=>{
             Alert.alert("ERROR",`Code :${e.code +' Message:'+ e.message}`)
            });
    }
}

export function LoginWithEmail (email,password,props){
    return (dispatch)=>{
        auth().signInWithEmailAndPassword(email,password).then((user)=>{

                auth().onAuthStateChanged((user)=>{
                    const {users} = props.state;   

                    if (user){
                        const guser = {
                            name : user.displayName,
                            id : user.uid,
                            age: null,
                            bloodgrp :null,
                            email : user.email,
                            photo : user.photoURL !== null ? user.photoURL:'https://api.multiavatar.com/'+user.name+'.png',
                            emailV : user.emailVerified,
                            creation : user.metadata.creationTime,
                            phone : user.phoneNumber,
                            gender : null,
                            location: null,
                        }
                        const filtereduser = users.filter((v)=> v.id === guser.id);
                        if(filtereduser.length <= 0){
                   
                            dispatch({type:ActionTypes.authState,payload:guser})
                            props.navigation.navigate('UserRegistry')
        
                        }else{
        
                            props.navigation.navigate('Home')
                         }
                     
                    }else{
                        props.navigation.navigate('Sign In');
                    }
                      
            
                 })
         

            
        }).catch( 
                (e)=>{
                     Alert.alert("ERROR",`Code :${e.code +' Message:'+ e.message}`)
                    });
    }
}


//1 all from db and stores to store
export function getUsers(){
    return async (dispatch)=>{
        database().ref('users/').on('value', (v) => {
            v.forEach((value) => {
                dispatch({ type: ActionTypes.getUsers, payload: { new: value.val() } });
            });
        })
}
}


//2 
export  function SignInGoogle(props){  
    return async (dispatch)=>{
        await GoogleSignin.signIn().then((data)=>{        
            const credential = auth.GoogleAuthProvider.credential(data.idToken);
          auth().signInWithCredential(credential);                    
          auth().onAuthStateChanged((user)=>{
        
            if (user){
                    const guser = {
                        name : user.displayName,
                        id : user.uid,
                        age: null,
                        bloodgrp :null,
                        email : user.email,
                        photo : user.photoURL !== null ? user.photoURL:'https://api.multiavatar.com/'+user.name+'.png',
                        emailV : user.emailVerified,
                        creation : user.metadata.creationTime,
                        phone : user.phoneNumber,
                        gender : null,
                        location: null,
                    }
                    const {users} = props.state;
        
                    const filtereduser = users.filter((v)=> v.id === guser.id);
                     if(filtereduser.length <= 0){
    
                        dispatch({type:ActionTypes.authState,payload:guser})
                        alert(user.displayName)
                        props.navigation.navigate('UserRegistry');

                    }else{

                        props.navigation.navigate('Home')
                     }
                 
                }else{
                    props.navigation.navigate('Sign In');
                }
                  
        
            })


          }).catch( 
                    (e)=>{
                     Alert.alert("ERROR",`Code :${e.code +' Message:'+ e.message}`)
                    }); 
    }
}
    




   
   

   
export function StoreToDB(user,props){
    return (dispatch)=>{
  database().ref('users/').child(user.id).set(user).then(
     ()=>{ 
        dispatch({type: ActionTypes.StoreToDB,payload:user})
        Alert.alert('Congratulations','profile Updated Successfully')
        props.navigation.navigate('Home');
    }
).catch((e)=>{ Alert.alert(e.code,e.message)})

    }
    
}


export function SignOut(props){
    return async (dispatch)=>{
        if (auth().currentUser.providerData[0].providerId !== 'google.com'){
         await auth().signOut().then(()=>{
            Alert.alert('Logged Out','User Successfully Logged Out email');
            dispatch({type:ActionTypes.SIGNOUT,payload :{}})
            props.nav.navigation.navigate('Sign In');

        }).catch( 
            (e)=>{
             Alert.alert("ERROR",`Code :${e.code +' Message:'+ e.message}`)
            });    
        }else{
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut().then(()=>{
            Alert.alert('Logged Out','User Successfully Logged Out');
            props.nav.navigation.navigate('Sign In');
        }).catch( 
            (e)=>{
             Alert.alert("ERROR",`Code :${e.code +' Message:'+ e.message}`)
            }); 
        }

    }
}

export function CuSaver(props){
    return (dispatch)=>{
    const {users} = props.state;   
     users.map((v)=>{
        
        if(v.id === props.state.guser.id)
        {
            console.log(v)
          return dispatch({type:ActionTypes.updateUser,payload : {v}})
        }

    })

        
        }
} 



export function QueryDb(val) {
    return (dispatch) => {
    database().ref('users/').on('value', (snap) => {
          console.log(snap.numChildren())
          Object.values(snap.val()).map((v)=>{
          return dispatch({type:ActionTypes.QUERYDB,payload:{new:v}})
          })
        })
    }
}