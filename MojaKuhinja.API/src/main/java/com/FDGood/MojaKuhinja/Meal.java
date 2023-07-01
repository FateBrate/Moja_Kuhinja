package com.FDGood.MojaKuhinja;


import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="meals")
public class Meal {
  @Id
private ObjectId id;
  private int MealID;
private String naziv;
private String detalji;
private  float cijena;
private String slika;
}
