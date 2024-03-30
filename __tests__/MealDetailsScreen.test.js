import React from 'react';
import {render} from '@testing-library/react-native';
import MealDetailsScreen from '../screens/MealDetailsScreen';

// Mock route prop
const mockRoute = {
  params: {mealId: 1},
};

test('renders MealDetailsScreen with loading state', () => {
  const {getByText} = render(<MealDetailsScreen route={mockRoute} />);
  expect(getByText('Loading...')).toBeTruthy();
});
