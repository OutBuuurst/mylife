import {ScrollView, StyleSheet, View} from 'react-native';
import {Button} from "react-native-paper";
import {getAllMemories} from "@/hooks/useDatabase";
import {useCallback, useEffect, useState} from "react";
import MemoryComponent from "@/components/MemoryComponent";
import Memory from "@/models/memory";

export default function TabTwoScreen() {


    const [memories, setMemories] = useState([new Memory(0,'','','','',null)]);


    const loadDataCallback = useCallback(async () => {
        try {
            const result = await getAllMemories()
            setMemories(prevState => ([...prevState, ...result]))

        } catch (error) {
            console.error("ERROOOOOR:");
            console.error(error);
        }
    }, []);

    useEffect( ()=>{

     loadDataCallback()

    },[])

  return (
    <ScrollView  >
        {memories.map((e)=><MemoryComponent key={Math.random()} content={e.content} id={e.id} coordinates={e.coordinates} createdAt={e.createdAt} updatedAt={e.updatedAt} contacts={null}></MemoryComponent>)}
      </ScrollView>
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
