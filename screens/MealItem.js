import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function MealItem({meal}) {
  return (
    <View>
      <Text style={styles.mealTitle}>{meal.title}</Text>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    marginVertical: 5,
    marginHorizontal: 10,
    textAlign: 'center',
  },
});

