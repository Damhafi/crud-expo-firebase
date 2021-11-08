import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Components
import CreateUserScreen from "./src/screens/usuarios/CreateUserScreen";
import UserDetailScreen from "./src/screens/usuarios/UserDetailScreen";
import UsersList from "./src/screens/usuarios/UsersList";
import { Entypo, Feather } from "@expo/vector-icons";

const Stack = createBottomTabNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#621FF7",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="UsersList"
        component={UsersList}
        options={{ 
          title: "Lista de Emrpesas",
          tabBarIcon: ({ size, color}) =>(
            <Entypo name="UsersList" size={size} color={color}/>
          ) 
        }}
      />
      <Stack.Screen
        name="CreateUserScreen"
        component={CreateUserScreen}
        options={{ 
          title: "Criar nova Empresa",
          tabBarIcon: ({ size, color}) =>(
            <Entypo name="" size={size} color={color}/>
          )        
        }}
      />
      <Stack.Screen
        name="UserDetailScreen"
        component={UserDetailScreen}
        options={{ 
          title: "Detalhe da Empresa",
          tabBarIcon: ({ size, color}) =>(
            <Feather name="user" size={size} color={color}/>
          )
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
