import { Prompt_600SemiBold } from "@expo-google-fonts/prompt";
import React from "react";
import { Text, StyleSheet, Pressable, Image, ImageBackground, View,  Dimensions } from "react-native";


import orgImage from "../../../assets/images/book.png";

var windowWidth = Dimensions.get('window').width;
const SearchProjectDisplay = ({
    onPress,
    text,
    icon = orgImage,
    type = "PRIMARY",
    bgColor,
    fgColor,
    style,
    description = "Summarry of the projemight need to hadle the problem if sdafdsf   dsf sdf  dsfsdf dfs sdf sdf dsf  sdfdsf sdf ds sd dsf this text is too lon",
    location = "London, ON",
    duration = "1 Year",
    projectName = "Name of project exe",
    roles = ["Software Engineer", "Marketing Specialist"],
    posted = "16 days Ago",
    Organization= "Western University",

  }) => {
    roles[0] = roles[0] + ",";
    for(let i = 0; i < roles.length; i++){
      if(i!= 0){
        if(i != roles.length-1)
          roles[i] = " " + roles[i] + ",";
        else{
          roles[i] = " " + roles[i];
        }
      }
    }
    var newLine = '\n';
    var roleLength = roles.length+1;
    const Category = (props) => <Text style={{fontWeight: 'bold',  color: "white",
    fontFamily: "Prompt_500Medium"}}>{props.children}</Text>
  return (



    <Pressable onPress={onPress} style={[Styles.container]} >
      <Image source={orgImage} style={Styles.image} />
        <View sytle={[Styles.Textbox]}>
          <Text numberOfLines={2}  style={[Styles.writting ]}><Category>{Organization}</Category></Text>
          <Text numberOfLines={2}  style={[Styles.writting ]}><Category>{projectName}</Category></Text>
          <Text numberOfLines={roleLength} style={[Styles.smallerWriting]}>Roles: {roles}</Text>
          <Text numberOfLines={2}  style={[Styles.smallerWriting]}>{location}</Text>          
          <Text  numberOfLines={1} style={[Styles.smallerWriting]}>{duration}</Text>
          <Text  numberOfLines={1} style={[Styles.postedWriting]}>{posted}</Text>
          <View style={Styles.separator} />
        </View>
     
    </Pressable>
  );
};

const Styles = StyleSheet.create({
  container: {
    flexDirection:'row',
  },
  Textbox:{
      bottom:-20,
  },
  image: {
    width:90,
    height:75,
    resizeMode:'contain',
    top:6,
    left:8,
    marginRight:10,
  },
  writting:{
    fontSize:20,
    left:10,
    color: "#0F6BAC",
    fontFamily: 'Roboto',
    flexWrap:'wrap',
    width: windowWidth - 100,
  },
  smallerWriting:{
    flexWrap:'wrap',
    fontSize:17,
    left:10,
    color: "#0F6BAC",
    fontFamily: 'Roboto',
    width: windowWidth - 100,

  },
  postedWriting:{
  top:-15,
  fontSize:15,
  color: "#0F6BAC",
  textAlign:"right",
  right:8,
  },
  separator: {
    color:"#483d8b",
    borderColor :"#483d8b",
    borderWidth: 1,
    top:-15,
    left:10,
    marginRight:15,
    height:2,
    borderRadius: 25,
  },
});
//notification item style

//project item style

export default SearchProjectDisplay;
