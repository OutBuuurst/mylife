import {Image, StyleSheet, Platform, View} from 'react-native';
import {MapView, MarkerView,} from "@rnmapbox/maps";
import {useEffect} from "react";
import Mapbox from "@rnmapbox/maps";
import {Icon} from "react-native-paper";

export default function HomeScreen() {

  Mapbox.setAccessToken('sk.eyJ1Ijoib3V0YnVyc3Q5OSIsImEiOiJjbTBma2NjcHMwaWV1MmpzN20xYWpyZnhtIn0.bsUARO5-eDXmjXOmhjXU2A').then(r => console.log(r))
  useEffect(()=>{

  })


  return (
      <View style={{flex:1, flexDirection:"column"}}>

        <MapView  style={styles.map} projection={"globe"} >

          <MarkerView coordinate={[14.8234234,35.123124]}>

            <Icon size={34} source={"pin"}>
            </Icon>

          </MarkerView>

        </MapView>
      </View>
      );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  container: {
    height: 300,
    width: 300,
    backgroundColor: "tomato"
  },
  map: {
    flex: 1
  }
});
