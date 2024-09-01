import {View, Text} from "react-native";
import ListItem from "react-native-paper/src/components/List/ListItem";
import {Icon, List, Switch} from "react-native-paper";
import ListSection from "react-native-paper/lib/typescript/components/List/ListSection";


export default function DataSettings(){
    return(<View style={{flex:1}}>
        <List.Section>
            <List.Subheader>Memory</List.Subheader>
            <ListItem onPress={()=>console.log("pressed")}  title={"Upload GPS Points?"} style={{maxHeight:50, height:50,backgroundColor:"white"}}
                      right={()=><Icon size={25} source={"chevron-right"}></Icon>}
            ></ListItem>


            <ListItem onPress={()=>console.log("pressed")}  title={"Upload Media With GPS?"} style={{maxHeight:50, height:50, backgroundColor:"white"}}
                      right={()=><Icon size={25} source={"chevron-right"}></Icon>}
            ></ListItem>

            <List.Subheader>All Data</List.Subheader>
            <ListItem onPress={()=>console.log("pressed")}  title={"Backup MyLife Data"} style={{maxHeight:50, height:50,backgroundColor:"white"}}
                      right={()=><Icon size={25} source={"chevron-right"}></Icon>}
            ></ListItem>


            <ListItem onPress={()=>console.log("pressed")} title={"Upload MyLife Data"} style={{maxHeight:50, height:50,backgroundColor:"white"}}
                      right={()=><Icon size={25} source={"chevron-right"}></Icon>}
            ></ListItem>
            <ListItem onPress={()=>console.log("pressed")}  title={"Erase All Data"} style={{maxHeight:50, height:50,backgroundColor:"white"}}
                      right={()=><Icon size={25} source={"chevron-right"}></Icon>}
            ></ListItem>


        </List.Section>

    </View>)
}