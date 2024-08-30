import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {List} from "react-native-paper";





export default function TabFourScreen(){
    return (<View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
        <FlatList data={[1, 2, 3, 4, 5]} renderItem={(item)=><TouchableOpacity onPress={() => console.log("pressed}", item.item)}>
            <Text>Hello {item.item}</ Text>
        </ TouchableOpacity>}></FlatList>
    </View>)
}