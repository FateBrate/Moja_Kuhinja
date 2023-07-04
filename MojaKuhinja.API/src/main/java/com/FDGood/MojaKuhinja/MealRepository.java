package com.FDGood.MojaKuhinja;

import org.bson.types.ObjectId;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.core.MongoAdminOperations;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MealRepository extends MongoRepository<Meal, ObjectId> {

}
