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

import emailImage from "../../../assets/images/email2.png";
import passwordImage from "../../../assets/images/padlock.png";
import school from "../../../assets/images/school.png";
import city from "../../../assets/images/city.png";
import book from "../../../assets/images/book.png";
import Logo from "../../../assets/images/CadmanLogoDark1.png";
import orgImage from "../../../assets/images/enterprise.png";
import personImage from "../../../assets/images/user2.png";
import CustomButton from "../../components/CustomButton";
import { useFonts, Prompt_500Medium } from "@expo-google-fonts/prompt";
import AppLoading from "expo-app-loading";
import { useNavigation } from "@react-navigation/native";
import CustomInput from "../../components/CustomInput";
import CustomDropDown from "../../components/CustomDropDown";


const CreateProject = () => {
  const { height } = useWindowDimensions();
  const [projectName, setProjectName] = useState("");
  const [projectType, setProjectType] = useState("");
  const [projectDuration, setProjectDuration] = useState("");
  const [projectSchool, setProjectSchool] = useState("");
  const [projectCity, setProjectCity] = useState("");
  const [projectIndustry, setProjectIndustry] = useState("");
  const [projectTech, setProjectTech] = useState("");
  const [projectFaculty, setProjectFaculty] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectRoles, setProjectRoles] = useState("");
  const [projectNotes, setProjectNotes] = useState("");
  const [projectSponsorship, setProjectSponsorship] = useState("");
  const [projectBadge, setProjectBadge] = useState("");
  const [projectSponcership, setProjectImage] = useState("");


  const navigation = useNavigation();
  const onBackPressed = () => {};
  const onForgotPasswordPressed = () => {
    navigation.navigate("ForgotPassword");
  };
  const onSignUpPressed = () => {
    navigation.navigate("SignUp");
  };

  let [fontsLoaded] = useFonts({
    Prompt_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }


  return (
      <View style={styles.container}>
       <ScrollView>
          <Image
            source={Logo}
            style={[styles.logo, { height: height * 0.3 }]}
            resizeMode="contain"
          />
          <Text style={styles.header}>
            Enter your project details:
          </Text>
          <CustomInput
            image={book}
            placeholder="Project Name"
            value={projectName}
            setValue={setProjectName}
          />
          <CustomInput
            image={book}
            placeholder="Project Type"
            value={projectType}
            setValue={setProjectType}
          />
          <CustomDropDown
            image={book}
            placeholder="Project Duration"
            value={projectDuration}
            setValue={setProjectDuration}
          />
          <CustomDropDown
            image={school}
            placeholder="School"
            value={projectSchool}
            setValue={setProjectSchool}
          />
          <CustomInput
            image={book}
            placeholder="Project School"
            value={projectSchool}
            setValue={setProjectSchool}
          />
          <CustomInput
            image={city}
            placeholder="Project City"
            value={projectCity}
            setValue={setProjectCity}
          />
          <CustomInput
            image={city}
            placeholder="Industry"
            value={projectIndustry}
            setValue={setProjectIndustry}
          />
          <CustomInput
            image={city}
            placeholder="Industry"
            value={projectIndustry}
            setValue={setProjectIndustry}
          />
        </ScrollView>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      backgroundColor: "#2A3950",
    },
    scrollView: {
      flex:1,
      backgroundColor: "#2A3950",
      marginHorizontal: 20,
    },
    logo: {
      width: "70%",
      maxWidth: 300,
      maxHeight: 200,
      padding: 20,
      alignSelf: "center",
    },
    header: {
      color: "#FFFFFF",
      fontFamily: "Prompt_500Medium",
      fontSize: 39,
      textAlign: "center",
      paddingLeft: 30,
      paddingTop: -10,
    },
    text: {
      fontSize: 22,
    },
  });
  
export default CreateProject;