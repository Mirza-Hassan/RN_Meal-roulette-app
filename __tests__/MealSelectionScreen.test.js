import React from 'react';
import {render} from '@testing-library/react-native';
import MealSelectionScreen from '../screens/MealSelectionScreen';

// Mock navigation prop
const mockNavigation = {
  navigate: jest.fn(),
};

test('renders MealSelectionScreen correctly', () => {
  const {getByText} = render(<MealSelectionScreen navigation={mockNavigation} />);
  expect(getByText('Refresh Meals')).toBeTruthy();
});
