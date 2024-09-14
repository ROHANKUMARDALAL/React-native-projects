import React from 'react'
import {
SafeAreaView,
View,
Text,
Style,
Button
} from 'react-native'
import CompanyData from './components/CompanyData'
//const name ="rohandalal" it is from here also but in next experiment we put
//inside function

function Fruit(){
  return "apple";
}
function App() {
  const name = "rohan" // it is properly working inside & outside the function also
  const age =23
  const email="rohankumar.rc@gmail.com"
  return (
    <SafeAreaView>
      <View>
        {/* <Text style={{fontSize: 23}}>my name is </Text>
        <Text style={{fontSize: 23}}>{name}</Text>
        <Text style={{fontSize: 23}}>my age is : {age}</Text>
        <Text style={{fontSize: 23}}>my email : {email}</Text>
        <Text style={{fontSize: 23}}>{Fruit()}</Text>
   */}
        
        {/* <Text> Hello from Rohan Dalal to react native world</Text> */}
        {/* <Text style={{ fontSize: 25 }}>Hello from Rohan</Text>
        <Button title='Press Here'></Button>
        <Text style={{fontSize: 23}}> Hello from Rohan Dalal to react native world</Text>
        <Button title='Press Me here from rohan dalal '></Button> 
        <Text style={{fontSize: 23}}>{100+120}</Text> 
        <Text style={{fontSize: 23}}>{age>23?"above 20":"unknown age"}</Text>  */}
        
        <Text style={{fontSize:24}}>Components</Text>
        <UserData /> 
       <CompanyData/>
      </View>
    </SafeAreaView>
  );
}


const UserData= ()=>{// defination of function and can be also called in another function
return(
  <View>
    <Text style ={{fontSize:18}}>name :Rohan Dalal</Text>
    <Text style ={{fontSize:18}}>age : 23</Text>
    <Text style ={{fontSize:18}}>college : AKG</Text>
  </View>
)
}

export default App; 







/*what is jsx - java script xml it is used to write a html code in js also
jsx is apower house of react native


what are components - independent & reusable code such as function
first letter of component is always Capital word
2 types--
a) functional
b) class based

we create components in another file and forlder also can be called in
main/app or another file also and gives same result 



*/