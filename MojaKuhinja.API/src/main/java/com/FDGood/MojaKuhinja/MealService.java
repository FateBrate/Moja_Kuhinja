package com.FDGood.MojaKuhinja;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
  public class MealService {
  @Autowired
  private MealRepository mealRepository;
  public List<Meal> allMeals(){
    return mealRepository.findAll();
  }
public Optional<Meal> getMealById(ObjectId id){
    return mealRepository.findById(id);
}
}
