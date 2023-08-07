package com.FDGood.MojaKuhinja.meals.controlers;

import com.FDGood.MojaKuhinja.meals.services.MealService;
import com.FDGood.MojaKuhinja.meals.entities.Meal;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
  @GetMapping("/GetBy{id}")
  public ResponseEntity<Optional<Meal>> getMealById(@PathVariable String id){
   return new ResponseEntity<Optional<Meal>>(mealService.getMealById(id),HttpStatus.OK);
  }

  @PostMapping("/addtoList")
  public ResponseEntity<Meal> addToList(Meal meal){
  return  new ResponseEntity<Meal>(mealService.addToList(meal),HttpStatus.OK);
  }
}
