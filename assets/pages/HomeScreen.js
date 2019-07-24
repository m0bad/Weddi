import React, { Component } from 'react';
import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView, FlatList, ImageBackground, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Home Screen Color Gradient
import Carousel from 'react-native-snap-carousel'; // Home Screen Carousel 
import { sliderWidth, itemWidth } from '../styles/SliderEntry.style'; // Carousel Responsive Width
import SliderEntry from '../components/SliderEntry'; // Carousel Functions
import styles, { colors } from '../styles/index.style'; // App Styles & Main Colors
import { ENTRIES1 } from '../static/entries'; // Carousel Static Data 


const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 2; // Set The Carousel Slider 1st Item to appear

 class HomeScreen extends Component {
  static navigationOptions = { //[Navigation] : Removing The Header in HomeScreen
    header: null,
  }
  constructor (props) {
    super(props);
    this.state = {
        slider1ActiveSlide: SLIDER_1_FIRST_ITEM, // Initialize The 1st Active slide on Carousel (For EX: Wedding Planners)
        GridListItems: [ // Home Screen Cards Data [STATIC]
          { key: "Makeup Artists" , img: 'https://www.libm.co.uk/wp-content/uploads/2017/07/79-Make-Up-Artist-Diploma.jpg' },
          { key: "Photographers" , img: 'https://i.ibb.co/tXbF6Rx/Photographers.jpg'},
          { key: "Wedding Halls" , img: 'http://www.bridebox.com/blog/wp-content/uploads/2014/06/casa-real-ruby-hill-best-wedding-venue-bay-area.jpg'},
          { key: "Wedding Planners" , img: 'https://i.ibb.co/g95HhKT/image-1.jpg'},
          { key: "Ateliers for Dresses" , img: 'https://i.ibb.co/sCSbMbP/wedding.jpg'},
          { key: "Hotels" , img: 'https://i.ibb.co/37mtKv1/hotels.jpg'},
          { key: "Hair Dresser" , img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.hellogiggles.com%2Fuploads%2F2017%2F04%2F25081859%2Fshutterstock_627157355.jpg&w=400&c=sc&poi=face&q=85'},
          { key: "Veil Designers" , img: 'https://image.dhgate.com/0x0/f2/albu/g7/M01/B4/38/rBVaSlpAnN2AXGPLAAI3zLnk2Y4489.jpg'},
          { key: "Laser & Beauty Centers", img: 'https://i.ibb.co/v461JGw/image.png' },
          { key: "Dental Clinics" , img: 'https://i.ibb.co/MCMRkH4/image-1.png'},
          { key: "Gym & Fitness" , img: 'https://www.active.com/Assets/fitness/exercise-myths.jpg'},
          { key: "SPA" , img: 'https://i.ibb.co/SR5r8bB/image-2.png'},
        ]
    };
}

  _renderItem ({item, index}) { //Rendering Carousel Data
    return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
}

_renderItemWithParallax ({item, index}, parallaxProps) { // Carousel Parallax Effect
    return (
        <SliderEntry
          data={item}
          even={(index + 1) % 2 === 0}
          parallax={true}
          parallaxProps={parallaxProps}
          navigation={this.props.navigation}   //<-------
        />
    );
}

_renderLightItem ({item, index}) { // Carousel White Cards (Odd)
    return <SliderEntry data={item} even={false} />;
}

_renderDarkItem ({item, index}) { // Carousel Black Cards (Even)
    return <SliderEntry data={item} even={true} />;
}

mainCarousel (number) { // Main Carousel Settings
  const { slider1ActiveSlide } = this.state;

  return ( // Carousel View & Settings
      <View style={styles.carouselContainer}>
          <Carousel
            ref={c => this._slider1Ref = c}
            data={ENTRIES1}
            renderItem={this._renderItemWithParallax.bind(this)}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            hasParallaxImages={true}
            firstItem={SLIDER_1_FIRST_ITEM}
            inactiveSlideScale={0.94}
            inactiveSlideOpacity={0.7}
            // inactiveSlideShift={20}
            containerCustomStyle={styles.slider}
            contentContainerCustomStyle={styles.sliderContentContainer}
            // loop={true}
            // loopClonesPerSide={2}
            // autoplay={true}
            // autoplayDelay={5000}
            // autoplayInterval={3000}
            // onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
          />
      </View>
  );
}

get gradient () { // Home Screen Color Gradient 
  return (
    <LinearGradient
    colors={[colors.background1, colors.background2]}
    startPoint={{ x: 1, y: 0 }}
    endPoint={{ x: 0, y: 1 }}
    style={styles.gradient}>
  </LinearGradient>
  );
}
render () {
  const carousel = this.mainCarousel(1); // Rendering the Carousel 

  return (
      <SafeAreaView style={styles.safeArea}>

          <View style={styles.container}>

              <StatusBar
                translucent={true}
                backgroundColor={'rgba(0, 0, 0, 0.3)'}
                barStyle={'light-content'}
              />
              { this.gradient }
              <ScrollView
                style={styles.scrollview}
                scrollEventThrottle={200}
                directionalLockEnabled={true}
              >
                  { carousel } 
                  
                  <FlatList
                  data={ this.state.GridListItems }
                  renderItem={ ({item}) =>
                    <TouchableOpacity
                      style={styles.GridViewContainer}
                    onPress={() => this.props.navigation.push('ProfileScreen', { height: "6'2", category: item.key })}>
                    <ImageBackground
                      source={{ uri: item.img }}
                      style={{width: '106%', height: '110%', justifyContent:'center'}}
                    >
                    <Text style={styles.GridViewTextLayout}  > {item.key} </Text>
                    </ImageBackground>

                    </TouchableOpacity>
                }
                numColumns={2}
         />
              </ScrollView>

          </View>
      </SafeAreaView>
  );
}
}

export default HomeScreen;
