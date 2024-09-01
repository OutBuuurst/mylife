import {FlatList, Text, TouchableOpacity, View} from "react-native";
import ListItem from "react-native-paper/src/components/List/ListItem";
import {Switch} from "react-native-paper";
import {useState} from "react";


let phonePinActive = false;

export default function MainSettingsScreen(){

    const [isSwitchOn, setIsSwitchOn] = useState(false);

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    return (<View style={{flex:1}}>
        <ListItem  title={"Activate Phone Pin"} style={{maxHeight:50, height:50, backgroundColor:"white"}}
                  right={()=><Switch value={isSwitchOn} onChange={()=> {
                      onToggleSwitch()
                  }}></Switch>}
        ></ListItem>
    </View>)
}