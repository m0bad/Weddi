import { StyleSheet, Dimensions } from 'react-native';
const win = Dimensions.get('window');
const ratio = win.height/5.5;
const responsiveFontSize = win.height/30;
export const colors = {
    black: '#1a1917',
    gray: '#888888',
    background1: '#B721FF',
    background2: '#21D4FD'
};

export default StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.black
    },
    container: {
        flex: 1,
        backgroundColor: colors.background1
    },
    gradient: {
        ...StyleSheet.absoluteFillObject
    },
    scrollview: {
        flex: 1
    },
    carouselContainerDark: {
        backgroundColor: colors.black
    },
    carouselContainerLight: {
        backgroundColor: 'white'
    },
    carouselContainer: {
        paddingVertical: 25
    },
    
    title: {
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    titleDark: {
        color: colors.black
    },

    slider: {
        marginTop: 15,
        overflow: 'visible' // for custom animations
    },
    sliderContentContainer: {
        paddingVertical: 2 // for custom animation
    },

      headerText: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        fontWeight: "bold"
      },
      GridViewContainer: {
        overflow: "hidden",
       flex:1,
       justifyContent: 'center',
       alignItems: 'center',
       height: ratio,
       margin: 5,
       backgroundColor: 'black',
       borderRadius: 5,
       shadowColor: '#000',
       shadowOffset: { width: 3, height: 3 },
       shadowOpacity: 0.8,
       shadowRadius: 3,
       elevation: 6,
       padding: 5,
    },
    GridViewTextLayout: {
       fontSize: responsiveFontSize,
       textAlign: 'center',
       fontWeight: 'bold',
       justifyContent: 'center',
       color: '#f5f5f5',
       padding: 10,
       shadowColor: '#000',
       shadowOffset: { width: 3, height: 3 },
       shadowOpacity: 0.8,
       shadowRadius: 3,
       elevation: 6,
     }
});
