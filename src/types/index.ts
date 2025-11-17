export type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export type LoginRequest = {
  email: string;
  password: string;
}

export type RegisterRequest = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export type AuthResponse = {
  user: User;
  token: string;
}

export type CalorieRequest = {
  dish_name: string;
  servings: number;
}

export type CalorieResult = {
  dish_name: string;
  servings: number;
  calories_per_serving: number;
  total_calories: number;
  source: string;
  timestamp?: string;
}
