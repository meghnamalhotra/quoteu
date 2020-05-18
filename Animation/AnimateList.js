import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  Animated,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import IMAGE_DATA from '../src/Assets/ImageData';

const {width} = Dimensions.get('window');
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Shoes',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Bags',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Clothes',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Googles',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    title: 'Wrist bands',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d75',
    title: 'Anklets',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d76',
    title: 'Makeup',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d77',
    title: 'Jewelry',
  },
];

function Item({title}) {
  const move = useRef(new Animated.Value(0)).current;
  const animateCard = () => {
    console.warn('hello');
    Animated.sequence([
      Animated.timing(move, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(move, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const animationStyles = {
    transform: [
      {
        rotate: move.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '10deg'],
        }),
      },
    ],
  };
  let [isSelected, setSelected] = useState(false);
  return (
    <Animated.View style={[styles.item, animationStyles]}>
      <TouchableOpacity
        onPress={() => {
          !isSelected ? animateCard() : null;
          setSelected(!isSelected);
        }}
        style={{
          alignItems: 'flex-end',
          paddingHorizontal: 10,
          paddingVertical: 5,
          paddingBottom: 30,
        }}>
        <Image
          resizeMode={'contain'}
          style={{height: 30, width: 30}}
          source={isSelected ? IMAGE_DATA.heartR : IMAGE_DATA.heartH}
        />
      </TouchableOpacity>
      <Text numberOfLines={1} style={styles.title}>
        {title}
      </Text>
    </Animated.View>
  );
}

export default function AnimateList() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    width: width / 2 - 30,
    marginHorizontal: 10,
    marginVertical: 10,
    paddingBottom: 50,
    paddingVertical: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
    borderRadius: 10,
  },
  title: {
    fontSize: 25,
    fontFamily: 'VINCHAND',
    textAlign: 'center',
  },
});
