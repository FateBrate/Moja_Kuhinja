package com.FDGood.MojaKuhinja.meals.repositories;

import com.FDGood.MojaKuhinja.meals.entities.Meal;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MealRepository extends MongoRepository<Meal, String> {

}
