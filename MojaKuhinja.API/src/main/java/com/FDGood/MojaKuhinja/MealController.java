package com.FDGood.MojaKuhinja;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/meals")
public class MealController {
  @Autowired
  private MealService mealService;
@GetMapping
  public ResponseEntity<List<Meal>> getAllMeals(){
  return new ResponseEntity<List<Meal>>(mealService.allMeals(), HttpStatus.OK);
}
  @GetMapping("/{id}")
  public ResponseEntity<Optional<Meal>> getMealById(@PathVariable ObjectId id){
   return new ResponseEntity<Optional<Meal>>(mealService.getMealById(id),HttpStatus.OK);
  }
}
