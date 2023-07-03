package com.FDGood.MojaKuhinja;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/meals/")
public class MealController {
@GetMapping
  public String allMeals(){
  return "";
}

}
