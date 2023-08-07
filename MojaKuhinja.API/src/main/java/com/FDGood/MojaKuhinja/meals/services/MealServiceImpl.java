package com.FDGood.MojaKuhinja.meals.services;
import com.FDGood.MojaKuhinja.meals.entities.Meal;
import com.FDGood.MojaKuhinja.meals.repositories.MealRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
  public class MealServiceImpl implements MealService {
  @Autowired
  private MealRepository mealRepository;
  public List<Meal> allMeals(){

    return mealRepository.findAll();
  }
public Optional<Meal> getMealById(String id){
    return mealRepository.findById(id);
}

  public Meal addToList(Meal meal){
    return mealRepository.save(meal);
  }
}
