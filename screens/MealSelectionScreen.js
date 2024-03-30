import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Button, StyleSheet} from 'react-native';
import { getAllMeals, getFourMeals } from './MealAPI';
import MealItem from './MealItem';

function MealSelectionScreen({ navigation }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    // Initially fetch all meals or the first 4 meals
    fetchAllMeals();
  }, []);

  const fetchAllMeals = async () => {
    try {
      const data = await getAllMeals();
      setMeals(data.meal_roulette_app_meals);
    } catch (error) {
      // console.log(error);
    }
  };

  const fetchNextFourMeals = async () => {
    try {
      const data = await getFourMeals();
      setMeals(data.meal_roulette_app_meals_aggregate.nodes);
    } catch (error) {
      // console.log(error);
    }
  };
  // console.log(meals)

  return (
    <View style={styles.container}>
      <Button title="Refresh Meals" onPress={fetchNextFourMeals} />
      <FlatList
        data={meals}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('MealDetails', { mealId: item.id })}>
            <MealItem meal={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default MealSelectionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
});
