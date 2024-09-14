import React from "react";
import {View , Text, StyleSheet, Image,Button, ScrollView} from "react-native"
import Header from "./components/Header";
import Product from "./components/Product";
const App=()=>{
  const products=[
    {
      name:"Samsung Mobile",
      color:"white",
      price:30000,
      image:"https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png"
    },
    {
      name:" Apple iphone ",
      color:"blue",
      price:70000,
      image:"https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png"
    },
    {
      name:"nokia Mobile",
      color:"black",
      price:7000,
      image:'https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png'
}]
  return(
    <View style={Styles.container}>
    <Header />
    <ScrollView>
   
    {
      products.map((item)=> <Product item={item}/>)
    }
    </ScrollView>
    
      
      
      
    </View>
  );
};
const Styles=StyleSheet.create(
  {
    container:
    {
      flex:1
    },
    
  }
)


export default App;