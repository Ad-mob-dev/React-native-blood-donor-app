import React from 'react';
import { View ,ScrollView,StyleSheet} from 'react-native';
import {H3,Thumbnail,Text,Separator,Header, Title, Body,Card,CardItem} from 'native-base';
import {connect} from 'react-redux';
import CustomHeader from '../components/header';


function GuideLines(props) {
  return (

    <ScrollView>
       
       <CustomHeader title='Donors Guidelines' nav={props}/>
        <Thumbnail source={require('../assets/timer.gif')} style={{width:'100%',height:200,resizeMode:'stretch'}}/>
   


        {/* give blood */}
        <CardItem bordered  style={{backgroundColor:'red',flexDirection:'column'}}>
            <H3 style={Styles.heading}>Who can give blood?</H3>
            <Text style={Styles.paragraph}>Most people can give blood if they are in good health. 
            There are some basic requirements one  need to fulfill in order to become a blood donor.  
            </Text>
         </CardItem>
         
         <Separator style={{width:0,height:5}}/>
        
        {/* Age */}
         <CardItem bordered style={{backgroundColor:'black',flexDirection:'column'}}>
            <H3 style={Styles.heading}>Age:</H3>
            <Text style={Styles.paragraph}>1) You are aged between 18 and 65.{'\n'}
        2) In some countries national legislation permits 16–17 year-olds to donate provided that they fulfil the physical and hematological criteria required and that appropriate consent is obtained.
        {'\n'}
        3) In some countries, regular donors over the age of 65 may be accepted at the discretion of the responsible physician. The upper age limit in some countries are 60.
        </Text>
        </CardItem>
        <Separator style={{width:0,height:5}}/>
        {/* Weight */}
        <CardItem bordered style={{backgroundColor:'red',flexDirection:'column'}}>
        <H3 style={Styles.heading}>Weight:</H3>
        <Text style={Styles.paragraph}>
            1) You weigh at least 50 kg.
            {'\n'}2) In some countries, donors of whole blood donations should weigh at least 45 kg to donate 350 ml ± 10% .
        </Text>
        </CardItem>
        
        <Separator style={{width:0,height:5}}/>
        
        <CardItem bordered style={{backgroundColor:'black',flexDirection:'column'}}>
        <H3 style={Styles.heading}>Health:</H3>
        <Text style={Styles.paragraph}>
        1) You must be in good health at the time you donate.{'\n'}
        2) You cannot donate if you have a cold, flu, sore throat, cold sore, stomach bug or any other infection.{'\n'}
        3) If you have recently had a tattoo or body piercing you cannot donate for 6 months from the date of the procedure.  If the body piercing was performed by a registered health professional and any inflammation has settled completely, you can donate blood after 12 hours.{'\n'}
        4) You must not donate blood If you do not meet the minimum haemoglobin level for blood donation{'\n'}
        5) A test will be administered at the donation site.In many countries, a haemoglobin level of not less than 12.0 g/dl for females and not less than 13.0 g/dl for males as the threshold.
        </Text>
        </CardItem>

        <Separator style={{width:0,height:5}}/>
        
        <CardItem bordered style={{backgroundColor:'red',flexDirection:'column'}}> 
        <H3 style={Styles.heading}>Travel:</H3>
        <Text style={Styles.paragraph}>
        1) Travel to areas where mosquito-borne infections are endemic, e.g. malaria, dengue and Zika virus infections, may result in a temporary deferral .{'\n'}
        2) Many countries also implemented the policy to defer blood donors with a history of travel or residence for defined cumulative exposure periods in specified countries or areas, as a measure to reduce the risk of transmitting variant Creutzfeldt-Jakob Disease (vCJD) by blood transfusion.
        </Text>
        </CardItem>
        
        <Separator style={{width:0,height:5}}/>

        <CardItem bordered style={{backgroundColor:'black',flexDirection:'column'}}>
        <H3 style={Styles.heading} >Behaviours:</H3>
        <Text style={Styles.paragraph}>
         1) You must not give blood:{'\n'}

        2) If you engaged in “at risk” sexual activity in the past 12 months{'\n'}

        3) Individuals with behaviours below will be deferred permanently: {'\n'}

        4) Have ever had a positive test for HIV (AIDS virus){'\n'}

        5) Have ever injected recreational drugs.{'\n'}
            
        6) In the national blood donor selection guidelines, there are more behavior eligibility criteria. Criteria could be different in different countries. 
        </Text>
        </CardItem>

        <Separator style={{width:0,height:5}}/>
        
        <CardItem bordered style={{backgroundColor:'red',flexDirection:'column'}}> 
        <H3 style={Styles.heading}>Pregnancy & breastfeeding:</H3>
        <Text style={Styles.paragraph}>
        1) Following pregnancy, the deferral period should last as many months as the duration of the pregnancy.
        {'\n'}
        2) It is not advisable to donate blood while breast-feeding. Following childbirth, the deferral period is at least 9 months (as for pregnancy) and until 3 months after your baby is significantly weaned (i.e. getting most of his/her nutrition from solids or bottle feeding).
        </Text>
       </CardItem> 

     </ScrollView>
  );
}

const Styles = StyleSheet.create({
    paragraph : {
        textAlign:'justify',
        lineHeight:30,
        color:'white'
        },
    heading:{
        fontSize:20,
        color:'white',
        alignSelf:'flex-start',
        fontWeight:'bold'
    }
});
function mapStateToProp(state){
    return ({
        state,
    })
}
export default connect(mapStateToProp,null)(GuideLines);