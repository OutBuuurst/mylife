import {Text, View} from "react-native";
import Memory from "@/models/memory";
import {Icon} from "react-native-paper";
import {useEffect} from "react";

export default function MemoryComponent(props:Memory ){




    return(<View style={{flex:1, backgroundColor:"white", width:"100%", marginTop:50}}>

<View style={{flex:1, height:50, maxHeight:50, flexDirection:"row", justifyContent:"space-between", width:"100%"}}>
    <Text style={{marginRight:40}}>{props.createdAt}</Text>
    <Icon size={20} source={"pin"}></Icon><Text> Country</Text>
    <Text></Text>
</View>

        <View style={{flex:1, backgroundColor:"white"}}>

            <Text style={{width:"100%"}}>{props.content}</Text>

        </View>
    </View>)
}