import {View, Text} from "react-native";
import ListItem from "react-native-paper/src/components/List/ListItem";
import {Icon, Switch} from "react-native-paper";
import {useState} from "react";

export default function UiSettings(){


    const [isSwitchOn, setIsSwitchOn] = useState(false);

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    return(<View style={{flex:1}}>
        <ListItem onPress={()=>console.log('pressed')} title={"Language"} style={{maxHeight:50, height:50, backgroundColor:"white"}}
                  right={()=><Icon size={25} source={"chevron-right"}></Icon>}
        ></ListItem>

        <ListItem title={"Dark Mode"} style={{maxHeight:50, height:50, backgroundColor:"white"}}
                  right={()=><Switch value={isSwitchOn} onChange={()=> {
                     onToggleSwitch()
                  }}></Switch>}
        ></ListItem>
        <ListItem onPress={()=>console.log('pressed')} title={"Background Color"} style={{maxHeight:50, height:50, backgroundColor:"white"}}
                  right={()=><Icon size={25} source={"chevron-right"}></Icon>}
        ></ListItem>
    </View>)
}