import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, ScrollView, ImageBackground, Image } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, enteredGoalText]);
  }

  function removeGoalHandler() {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.slice(0, -1); // Remove the last item from the array
    });
  }

  return (
    <ImageBackground
      source={require('/Users/evakathrinehovmand/RNCourse2/assets/fert.png')}  // Reference to the background image
      style={styles.background} // Style for the background
    >
      {/* Logo at the top */}
      <View style={styles.logoContainer}>
        <Image source={require('/Users/evakathrinehovmand/RNCourse2/assets/logo.png')} style={styles.logo} />
      </View>

      <View style={styles.appContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Your Course goal!"
            onChangeText={goalInputHandler}
          />
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <Button color={'#85acd7'} title="Add goal" onPress={addGoalHandler} />
            </View>
            <View style={styles.buttonContainer}>
              <Button color={'#85acd7'} title="Remove goal" onPress={removeGoalHandler} />
            </View>
          </View>
        </View>

        <ScrollView style={styles.goalsContainer}>
          {courseGoals.map((goal, index) => (
            <Text style={styles.goalItem} key={index}>
              {goal}
            </Text>
          ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1, // Ensures the background image takes up the whole screen
    resizeMode: 'cover', // Ensures the image covers the entire background
  },
  logoContainer: {
    position: 'absolute', // Makes sure the logo is placed at the top
    top: 50, // Adjust the top margin as needed to place the logo
    left: 20, // Adjust the left margin as needed
    zIndex: 10, // Ensures the logo is on top of the background
  },
  logo: {
    width: 120, // Adjust the size of the logo as needed
    height: 50,
    resizeMode: 'contain', // Keeps the logo's aspect ratio
  },
  appContainer: {
    flex: 1,
    paddingTop: 150, // Adjusted padding to leave room for the logo
    paddingHorizontal: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#000',
    width: '70%',
    marginRight: 8,
    padding: 10,
    backgroundColor: 'white', // Add a background color to make the input readable
  },
  buttonsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: '100%',
    marginVertical: 5,
  },
  goalsContainer: {
    flex: 4,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#b6cee7',
    color: 'white',
    textAlign: 'center',
  },
});