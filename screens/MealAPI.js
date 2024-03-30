import axios from 'axios';

// Base URL for the Meal Roulette API
const BASE_URL = 'https://playground.devskills.co/api/rest/meal-roulette-app/meals';

// Fetch all meals
export const getAllMeals = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching all meals:', error);
    throw error;
  }
};

// Fetch 4 meals starting from index 4
export const getFourMeals = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/limit/4/offset/4`);
    return response.data;
  } catch (error) {
    console.error('Error fetching 4 meals starting from index 4:', error);
    throw error;
  }
};

// Fetch a meal by its ID
export const getMealById = async (mealId) => {
  try {
    const response = await axios.get(`${BASE_URL}/${mealId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching the meal with ID ${mealId}:`, error);
    throw error;
  }
};
