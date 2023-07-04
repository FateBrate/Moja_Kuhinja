package com.FDGood.MojaKuhinja;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;
@Document(collection="meals")
@Data
@NoArgsConstructor
@AllArgsConstructor



public class Meal {
  @Id
private ObjectId id;
  private int MealID;
private String naziv;
private String detalji;
private  float cijena;
private String slika;
}
