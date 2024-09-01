import Ionicons from '@expo/vector-icons/Ionicons';
import {StyleSheet, Image, Platform, ScrollView, View, Text} from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {Button} from "react-native-paper";
import {createContact, createMemory, getAllContacts, getAllMemories} from "@/hooks/useDatabase";
import Contact from "@/models/contact";

export default function DatabaseTesterScreen() {



    return (
        <View >
            <Button style={{marginTop:50}} children={<Text>Press me!</Text>} onPress={async () => {
                await createMemory(Date.now().toString(), Date.now().toString(), '{text:"Hi"}', "5.343434,6.8234");

                console.log('memory created');
            }}></Button>

            <Button style={{marginTop:50}} children={<Text>Press me!</Text>} onPress={async () => {
                const mems =  await getAllMemories();
                console.log(mems);

                console.log('memory fetched');
            }}></Button>


            <Button style={{marginTop:50}} children={<Text>Press me!</Text>} onPress={async () => {
                const mems =  await createContact(new Contact(1,"haythem","drihmi","20574210","drihmihaythem@gmail.com",null,null,null,null,null,null,null,null));
                console.log(mems);

                console.log('memory fetched');
            }}></Button>


            <Button style={{marginTop:50}} children={<Text>Press me!</Text>} onPress={async () => {
                const conts = await getAllContacts();
                console.log(conts);

                console.log('memory fetched');
            }}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    headerImage: {
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute',
    },
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
    },
});
