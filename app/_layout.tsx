import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import {useCallback, useEffect} from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import {createTables, getDBConnection} from "@/hooks/useDatabase";
import {openDatabase} from "react-native-sqlite-storage";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default  function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });


  const loadDataCallback = useCallback(async () => {
    try {
      const db = await getDBConnection();
      const result = await createTables(db)
    } catch (error) {
      console.error("ERROOOOOR:");
      console.error(error);
    }
  }, []);

  useEffect(() => {



    if (loaded) {
      SplashScreen.hideAsync();
      loadDataCallback();
    }


  }, [loaded]);

  if (!loaded) {
    return null;
  }



  return (

      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
          <Stack.Screen name="+not-found"/>
          <Stack.Screen options={{headerTitle:"UI Settings"}} name={"uiSettings"} ></Stack.Screen>
          <Stack.Screen options={{headerTitle:"Data Settings"}} name={"dataSettings"} ></Stack.Screen>
          <Stack.Screen options={{headerTitle:"Security Settings"}} name={"securitySettings"} ></Stack.Screen>

        </Stack>
      </ThemeProvider>
  );
}
