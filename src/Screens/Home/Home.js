import React, {Component} from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import IMAGE_DATA from '../../Assets/ImageData';
import moment from 'moment';
import DATA from '../../Assets/Category.json';
const windowWidth = Dimensions.get('window').width;
const GREET = {
  morning: 'GOOD MORNING!',
  afternoon: 'GOOD AFTERNOON!',
  evening: 'GOOD EVENING!',
};
const IMAGE = {
  morning: IMAGE_DATA.morning,
  afternoon: IMAGE_DATA.afternoon,
  evening: IMAGE_DATA.evening,
};
// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Fourth Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Fifth Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'sixth Item',
//   },
// ];

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greetingType: '',
      imagePath: '',
    };
  }

  getGreetType = () => {
    const timeHour = moment().hours();
    let type;
    if (timeHour >= 6 && timeHour <= 11) {
      type = 'morning';
    } else if (timeHour >= 12 && timeHour <= 15) {
      type = 'afternoon';
    } else if (
      (timeHour >= 16 && timeHour <= 23) ||
      (timeHour >= 0 && timeHour <= 5)
    ) {
      type = 'evening';
    }
    this.setState({greetingType: GREET[type], imagePath: IMAGE[type]});
  };

  componentDidMount() {
    console.log('data', DATA.Data);
    this.getGreetType();
  }

  topView = () => {
    return (
      <View style={styles.topView}>
        <Text style={styles.topViewTxt}>QUOTEU</Text>
      </View>
    );
  };

  categoryList = () => {
    return (
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={DATA.Data}
          renderItem={({item}) => this.Item(item)}
        />
      </View>
    );
  };

  Item = item => {
    return (
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#ffffff', '#d26e23']}
        style={styles.categoryListItem}>
        <View>
          <Text numberOfLines={1} style={{fontSize: 18, fontWeight: 'bold'}}>
            {item.type}
          </Text>
        </View>
      </LinearGradient>
    );
  };

  render() {
    // const {navigation} = this.props;
    const {greetingType} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground source={IMAGE_DATA.backg} style={styles.imgBack}>
          {this.topView()}
          <View style={styles.greetingView}>
            <View style={{justifyContent: 'center'}}>
              <Text style={styles.greetTxt}>{greetingType}</Text>
            </View>
            <View style={{justifyContent: 'center'}}>
              <Image
                resizeMode={'cover'}
                style={styles.image}
                source={this.state.imagePath}
              />
            </View>
          </View>
          <View style={{paddingVertical: 20, paddingHorizontal: 10}}>
            <Text style={styles.title}>CATEGORY</Text>
          </View>
          {this.categoryList()}

          {/* <View style={{flex: 1, paddingVertical:50}}>
            <Text>hell</Text>
          </View> */}
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A9A9A9',
  },
  topView: {
    paddingVertical: 5,
    backgroundColor: 'black',
  },
  greetingView: {
    paddingVertical: 5,
    marginTop: 30,
    marginVertical: 10,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    backgroundColor: '#696969',
    justifyContent: 'space-evenly',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
    borderRadius: 20,
  },
  topViewTxt: {
    color: '#d26e23',
    fontFamily: 'VINCHAND',
    fontSize: 30,
    textAlign: 'center',
  },
  image: {
    height: 46,
    width: 46,
    borderRadius: 23,
    borderColor: '#A9A9A9',
    borderWidth: 1,
  },
  greetTxt: {
    color: 'white',
    fontSize: 20,
    // fontFamily: 'VINCHAND',
  },
  imgBack: {
    flex: 1,
    resizeMode: 'cover',
  },
  categoryListItem: {
    // backgroundColor: 'white',
    width: windowWidth / 3 - 20,
    marginHorizontal: 10,
    paddingVertical: 20,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontFamily: 'VINCHAND',
    fontSize: 25,
  },
});
