import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View } from 'react-native';
import { useFonts, Montserrat_900Black } from '@expo-google-fonts/montserrat';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './src/components/Login';
import SignUp from './src/components/SignUp';
import { AuthProvider } from './src/components/Auth';
import { auth } from './firebase';
import GetStrayData from './src/components/GetStrayData';
import { useState, useEffect } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  let [fontsLoaded] = useFonts({
    Montserrat_900Black,
  });

  const [user,setUser] = useState('')
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((userExist)=>{
      if(userExist){
        setUser(userExist)
      }else{
        setUser("")
      }
    })
    return unsubscribe
  },[])
  
  return (
    <AuthProvider>
      <NavigationContainer>
      {user ? <TabNavigator/> : 
        <Stack.Navigator initialRouteName="Login"
        screenOptions={{
        headerShown: false
        }}>
          <Stack.Screen name="SignUp" 
          component={SignUp} 
          />
          <Stack.Screen name="Login" 
          component={Login} 
          />
        </Stack.Navigator>
      }
        <StatusBar style="auto" />
      </NavigationContainer>
    </AuthProvider>
  );
}

const TabNavigator = () => {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home-outline';
            } else if (route.name === 'Donate') {
              iconName = 'cash-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#3394EB',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={GetStrayData} />
        <Tab.Screen name="Donate" component={GetStrayData} />
      </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
