
// import React, { useState, useRef, useEffect } from 'react';
// import { View, Text, StyleSheet, ScrollView, TouchableOpacity, LayoutAnimation, Image } from 'react-native';

// export default function Tabs() {
//   const tabs = [<Image source={require('./pics/Amo.jpg')} style={{ width: 250, height: 250 }}/>, <View style={{alignItems: 'center'}}><Text>Great service.</Text><Text>Amazing people.</Text><Text>Get to your location fast and safe.</Text></View>, <Image source={require('./pics/Ff.jpeg')} style={{ width: 150, height: 150 }}/>, 'Tab 4', <Image source={require('./pics/Dd.jpeg')} style={{ width: 150, height: 150 }}/>];//Image shows up in web but not android
//   const [activeTab, setActiveTab] = useState(0);
//   const scrollViewRef = useRef();

//   const handleTabPress = (index) => {
//     setActiveTab(index);
//     scrollToTab(index);
//   };

//   const scrollToTab = (index) => {
//     if (scrollViewRef.current) {
//       const offsetX = index * 180;
//       scrollViewRef.current.scrollTo({ x: offsetX, animated: true });
//     }
//   };

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       const nextTab = (activeTab + 1) % tabs.length;
//       setActiveTab(nextTab);
//       scrollToTab(nextTab);
//     }, 3500);

//     return () => clearTimeout(timer);
//   }, [activeTab, tabs]);

//   LayoutAnimation.configureNext({
//     duration: 750,
//     update: {
//       type: LayoutAnimation.Types.easeInEaseOut,
//       property: LayoutAnimation.Properties.scaleXY,
//     },
//   });

//   return (
//     <View style={styles.container}>
//       <ScrollView
//         ref={scrollViewRef}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={styles.tabContainer}
//       >
//         {tabs.map((tab, index) => (
//           <TouchableOpacity
//             key={index}
//             style={[styles.tabItem, activeTab === index && styles.activeTab]}
//             onPress={() => handleTabPress(index)}
//           >
//             <Text style={styles.tabText}>{tab}</Text>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>
//       <View style={styles.content}>
//         <Text>Content of Tab {activeTab + 1}</Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 50,
//   },
//   tabContainer: {
//     flexDirection: 'row',
//     paddingBottom: 10,
//   },
//   tabItem: {
//     height: 150,
//     width: 150,
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     marginLeft: 15,
//     marginRight: 15,
//     borderRadius: 20,
//     backgroundColor: '#ccc',
//   },
//   activeTab: {
//     backgroundColor: 'dodgerblue',
//     height: 250,
//     width: 250,
//   },
//   tabText: {
//     fontSize: 16,
//     color: 'black',
//   },
//   content: {
//     marginTop: 20,
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, LayoutAnimation, Image } from 'react-native';

export default function Tabs() {
  const tabs = [
    <Image source={require('./pics/Amo.jpg')} style={{ width: 180, height: 180 }} />,
    <View style={{ alignItems: 'center' }}>
      <Text style={styles.tabText}>Great service.</Text>
      <Text style={styles.tabText}>Amazing people.</Text>
      <Text style={styles.tabText}>Get to your location fast and</Text>
      <Text style={styles.tabText}>safe.</Text>
    </View>,
    <Image source={require('./pics/Ff.jpeg')} style={{ width: 180, height: 180 }} />,
    <View style={{ alignItems: 'center' }}>
      <Text style={styles.tabText}>Great platform.</Text>
      <Text style={styles.tabText}>Large user base.</Text>
      <Text style={styles.tabText}>Provide your services with a</Text>
      <Text style={styles.tabText}>solid backing.</Text>
    </View>,
    <Image source={require('./pics/Dd.jpeg')} style={{ width: 180, height: 180 }} />
  ];

  const [activeTab, setActiveTab] = useState(0);
  const scrollViewRef = useRef();

  const handleTabPress = (index) => {
    setActiveTab(index);
    scrollToTab(index);
  };

  const scrollToTab = (index) => {
    if (scrollViewRef.current) {
      const offsetX = index * 180;
      scrollViewRef.current.scrollTo({ x: offsetX, animated: true });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextTab = (activeTab + 1) % tabs.length;
      setActiveTab(nextTab);
      scrollToTab(nextTab);
    }, 3500);

    return () => clearTimeout(timer);
  }, [activeTab, tabs]);

  LayoutAnimation.configureNext({
    duration: 750,
    update: {
      type: LayoutAnimation.Types.easeInEaseOut,
      property: LayoutAnimation.Properties.scaleXY,
    },
  });

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabContainer}
      >
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.tabItem, activeTab === index && styles.activeTab]}
            onPress={() => handleTabPress(index)}
          >
            <View style={styles.tabContent}>
              {tab}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.content}>
        <Text>Content of Tab {activeTab + 1}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  tabContainer: {
    flexDirection: 'row',
    paddingBottom: 10,
  },
  tabItem: {
    height: 150,
    width: 150,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 20,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: "rgb(34, 145, 12)",
    height: 250,
    width: 250,
  },
  tabContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    fontSize: 16,
    color: 'white',
  },
  content: {
    marginTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
