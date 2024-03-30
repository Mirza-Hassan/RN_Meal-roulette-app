import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {getMealById} from './MealAPI';

function MealDetailsScreen({route}) {
  const {mealId} = route.params;
  const [mealDetails, setMealDetails] = useState(null);

  useEffect(() => {
    const fetchMealDetails = async () => {
      try {
        const data = await getMealById(mealId);
        setMealDetails(data.meal_roulette_app_meals_by_pk);
      } catch (error) {
        console.error(error);
      }
    };

    if (mealId) {
      fetchMealDetails();
    }
  }, [mealId]);

  if (!mealDetails) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {mealDetails.picture && (
        <Image source={{uri: mealDetails.picture}} style={styles.image} />
      )}
      <Text style={styles.title}>{mealDetails.title}</Text>
      <Text style={styles.description}>{mealDetails.description}</Text>
      <Text style={styles.ingredients}>{mealDetails.ingredients}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 15,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    textAlign: 'justify',
    color: '#333',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  ingredients: {
    fontSize: 18,
    color: '#333',
    textAlign: 'left',
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    alignSelf: 'stretch',
  },
});

export default MealDetailsScreen;
