import {StyleSheet,Dimensions} from 'react-native';

const gstyles = new StyleSheet.create({
 
    socialloginbtn : {
        color:'white',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        marginTop:10,
        alignSelf:'center',
        borderRadius:30,
        width:'90%'
    },
     sociallogin : {
        color:'white',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30,
        width:'45%'
     },

     socialloginicn:{
         color:'white',
         fontSize:13.5,

     },
     
     inputicn:{
         color:'black',
         fontSize:18,
         marginLeft:5,
     },
     inputicnr:{
        color:'black',
        fontSize:18,
        marginRight:5,
    },
     sociallogintxt:{
        color:'white',
        fontSize:13.5,
    },
     card :{
         alignSelf:'center',
         width:Dimensions.get('screen').width,
         height:Dimensions.get("screen").height-35,
         backgroundColor:'white',
         elevation:2,
     },
     cardBody:{
         flexDirection:'column',
         width:'100%',
         
     }



})

export default gstyles;