// import * as React from 'react';
// import { View } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import {
//   createStaticNavigation,
//   useNavigation,
// } from '@react-navigation/native';
// import { Button } from '@react-navigation/elements';

// function HomeScreen() {
//   const navigation = useNavigation();

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.navigate('Notifications')}>
//         Go to notifications
//       </Button>
//     </View>
//   );
// }

// function NotificationsScreen() {
//   const navigation = useNavigation();

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()}>Go back home</Button>
//     </View>
//   );
// }

// const Drawer = createDrawerNavigator({
//   screens: {
//     Home: HomeScreen,
//     Notifications: NotificationsScreen,
//   },
// });

// const Navigation = createStaticNavigation(Drawer);

// export default function App() {
//   return <Navigation />;
// }

//Dynamic type

// import * as React from 'react';
// import { View } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer, useNavigation } from '@react-navigation/native';
// import { Button } from '@react-navigation/elements';

// function HomeScreen() {
//   const navigation = useNavigation();

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.navigate('Notifications')}>
//         Go to notifications
//       </Button>
//     </View>
//   );
// }

// function NotificationsScreen() {
//   const navigation = useNavigation();

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()}>Go back home</Button>
//     </View>
//   );
// }

// const Drawer = createDrawerNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }


//  {BOTTOM TAB NAVIGATOR}

// import * as React from 'react';
// import { Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

// const Tab = createBottomTabNavigator();

// function RootTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Settings" component={SettingsScreen} />
//     </Tab.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <RootTabs />
//     </NavigationContainer>
//   );
// }


// {MATERIAL TOP TABS}

 import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
 import {View,Text } from "react-native"
  import { NavigationContainer } from '@react-navigation/native';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator style={{marginTop:40}}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
export default function App() {
    return (
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    );
  }

  