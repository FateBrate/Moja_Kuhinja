package com.FDGood.MojaKuhinja.meals.services;

import com.FDGood.MojaKuhinja.meals.entities.Meal;


import java.util.List;
import java.util.Optional;

public interface MealService {
  public Meal addToList(Meal meal);
  public List<Meal> allMeals();
  public Optional<Meal> getMealById(String id);
}
