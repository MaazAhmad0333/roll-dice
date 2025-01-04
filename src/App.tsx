import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
  Image,
  Pressable,
  ImageBackground,
} from 'react-native';

import DiceOne from '../assets/diceOne.png'
import DiceTwo from '../assets/diceTwo.png'
import DiceThree from '../assets/diceThree.png'
import DiceFour from '../assets/diceFour.png'
import DiceFive from '../assets/diceFive.png'
import DiceSix from '../assets/diceSix.png'
import wallpaper from '../assets/background-img1.jpg'

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

//Component
const Dice = ({imageUrl}: DiceProps):React.JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  );
}

function App(): React.JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne) 

  const rollDiceOnTap = () => {
    let randomNumber = Math.floor(Math.random() * 6 ) + 1;
    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne)
        break;
      case 2:
        setDiceImage(DiceTwo)
        break;
      case 3:
        setDiceImage(DiceThree)
        break;
      case 4:
        setDiceImage(DiceFour)
        break;
      case 5:
        setDiceImage(DiceFive)
        break;
      case 6:
        setDiceImage(DiceSix)
        break;
    
      default:
        setDiceImage(DiceOne)
        break;
    } 
  } 
  
  return (
    <>
    <ImageBackground source={wallpaper} style={styles.wallpaper}>
    <View style={styles.pageTitleContainer}>
      <Text style={styles.pageTitle}>Welcome To Dice Roll Game</Text>
    </View>
    <View style={styles.container}>
      <Dice imageUrl={diceImage} /> 
      <Pressable 
      onPress={rollDiceOnTap} 
      style={({ pressed }) => [
        styles.rollDiceBtn,
        pressed && { transform: [{ scale: 0.95 }] }, // Press effect
      ]}
      >
        <LinearGradient
      colors={['#ff1a1a', '#ff9999']}
      style={styles.rollDiceBtn}
    >
        <Text style={styles.rollDiceBtnText}>Roll The Dice</Text>
        </LinearGradient>
      </Pressable>
    </View>
    </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  diceImage: {
    width: 200,
    height: 200,
    marginBottom: 50,
    elevation: 20
  },
  rollDiceBtn: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 0,
    borderRadius: 25,
    // fontSize: 16,
    // color: '#FFFFFF',
    // fontWeight: '700',
    // textTransform: 'uppercase',
    // marginVertical: 10,
    // backgroundColor: 'linear-gradient(to right, #330000, #feb47b)', // Gradient effect
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 10, // For Android
  },
  rollDiceBtnText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',

  },
  pageTitleContainer: {
    alignItems: 'center',
    marginVertical: 30,
    backgroundColor: '#330000',
    padding: 10,
    borderRadius: 15,

  },
  wallpaper: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center'
  },

});

export default App;
