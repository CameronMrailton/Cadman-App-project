import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  StatusBar,
  SafeAreaView,
  Image,
  StyleSheet,
  useWindowDimensions,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";

import ProfilePicture from "../../../assets/images/CadmanLogoDark1.png";//get from database



import school from "../../../assets/images/school.png";
import city from "../../../assets/images/city.png";
import personImage from "../../../assets/images/user2.png";

import CustomButton from "../../components/CustomButton";
import { useFonts, Prompt_500Medium } from "@expo-google-fonts/prompt";
import AppLoading from "expo-app-loading";
import { useNavigation } from "@react-navigation/native";
import CustomInput from "../../components/CustomInput";
import CustomDropDown from "../../components/CustomDropDown";


const ProfilePage = () => {

  const ProfileName = "Cameron Railton"; //get from database
  const ProfileSchool = "University of Western Ontario"; //get from database
  const ProfileLocation = "Western Road, London, ON"; //get from database
  const ProfileProgram = "Honour's in computer science with a minor in  "; //get from database

  const navigation = useNavigation();

  const onBackPressed = () => {
    navigation.navigate("Home");
  };
  const onEditPressed = () => {
    navigation.navigate("EditProfile");
  };

  let [fontsLoaded] = useFonts({
    Prompt_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }


  return (
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
      >
        <View style={styles.headBar}>
          <CustomButton
            text="Edit"
            onPress={onEditPressed}
            type="SECONDARY"
            style={styles.editButton}
          />
          <Text style={styles.headBarText}>
                Profile
          </Text>
          <CustomButton
            text="Back"
            onPress={onEditPressed}
            type="SECONDARY"
            style={styles.backButton}
          />
        </View>
       <ScrollView Style={styles.scrollView}>

            <Image source={ProfilePicture} style={[styles.profilePic]}/>
            <Text style={styles.profileName}>
                {ProfileName}
            </Text>

          <View style={styles.separator} />

          <View Style={styles.boxBackground}>
            <Text style={styles.profileInfoScetion}>
                  {ProfileLocation}
            </Text>
            <Text style={styles.profileInfoScetion}>
                  {ProfileSchool}
            </Text>
            <Text style={styles.profileInfoScetion}>
                  {ProfileProgram}
            </Text>
          </View>

          <View style={styles.separator} /> 
          
          <Text style={styles.profileCategorySection}>
                  Badges:
          </Text>
          <ScrollView style={styles.sideSwippingScrollView} horizontal={true}>


          </ScrollView>

          <View style={styles.separator} /> 

          <Text style={styles.profileCategorySection}>
                  Projects:
          </Text>
          <ScrollView style={styles.sideSwippingScrollView} horizontal={true}>


          </ScrollView>

          <View style={styles.separator} /> 

          <Text style={styles.profileCategorySection}>
                  Clubs:
          </Text>
          <ScrollView style={styles.sideSwippingScrollView} horizontal={true}>


          </ScrollView>

        </ScrollView>


      </KeyboardAvoidingView>
    );
  }
  
  const styles = StyleSheet.create({
    headBar:{
      backgroundColor: "#2A3950",
      height: 65,
      borderBottomColor:"#111727",
      borderBottomWidth:1,
    },
    headBarText:{
      color: "#FFFFFF",
      fontFamily: "Prompt_500Medium",
      fontSize: 25,
      textAlign: "center",
      marginTop:8,
    },

    container: {
      flex: 1,
      backgroundColor: "#2A3950",
    },
    boxBackground:{
      backgroundColor: "red",
      flex:1,
      width: 400,
      height: 300,
    },
    scrollView: {
      flex:1,
      backgroundColor: "#2A3950",
      marginHorizontal: 20,
      alignSelf:"center",
    },
    profilePic: {
      width: 400,
      height: 300,
      alignSelf: "center",
      flex:1,
      borderRadius: 10,
      marginTop:14,
    },
    profileName:{
        color: "#FFFFFF",
        fontFamily: "Prompt_500Medium",
        fontSize: 35,
        textAlign: "center",
        marginTop:-14,
    },
    profileInfoScetion:{
      color: "#FFFFFF",
      fontFamily: "Prompt_500Medium",
      fontSize: 20,
      textAlign: "left",
      paddingLeft: 30,
      paddingTop: 20,
      marginBottom: -8,
      flex:1,
    },
    profileCategorySection:{
      color: "#FFFFFF",
      fontFamily: "Prompt_500Medium",
      fontSize: 20,
      textAlign: "left",
      paddingLeft: 30,
      paddingTop: 30,
      marginTop: -12,
      marginBottom: 15,
    },
    separator: {
      backgroundColor: '#EDEDED',
      borderColor:'#EDEDED',
      borderWidth: 0.8,
      flex: 8,
      flexDirection: 'row',
      marginHorizontal:10,
      marginVertical:20,
      marginBottom:-5,
      height:3,
      borderRadius: 25,
    },
    sideSwippingScrollView:{
      backgroundColor: "#354467",
      height:225,
      marginLeft:20,
      marginBottom:15,
    },
    editButton:{
      position: 'absolute',
      right: 5,
      width:65,
      top: -2,
      marginRight:3,
    },
    backButton:{
      position: 'absolute',
      left: 5,
      width:72,
      top: -2,
      marginLeft:3,
    },

  });
  
export default ProfilePage;
