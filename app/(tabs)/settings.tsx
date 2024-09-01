import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {router, Stack} from "expo-router";
import ListItem from "react-native-paper/src/components/List/ListItem";
import {Icon, List} from "react-native-paper";



function pressHandler(item: [], ){
}

const content =  [["Security","securitySettings"],
    ["UI","uiSettings"],
    ["Data","dataSettings"]];

export default function TabFourScreen(){


    return (<View style={{flex:1, justifyContent:"flex-start", alignItems:"flex-start"}}>

        {content.map((e)=><ListItem  key={e[0]}
                                     borderless={false}
                                    style={{flex:1, maxHeight:50, height:50, backgroundColor:"white"}} title={e[0]}
                                    onPress={() => router.push(e[1])}
                                    left={()=><Icon size={20} source={"camera"}></Icon>}
                                    right={()=><Icon size={20} source={"chevron-right"}></Icon>}
        ></ListItem> )}



    </View>)
}