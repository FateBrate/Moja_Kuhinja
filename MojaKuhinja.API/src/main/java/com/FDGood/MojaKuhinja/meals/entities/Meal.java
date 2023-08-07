package com.FDGood.MojaKuhinja.meals.entities;


import com.FDGood.MojaKuhinja.common.BaseClass;
import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection="meals")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter


public class Meal extends BaseClass {


    private String naziv;

    private String detalji;

    private  float cijena;

    private String slika;

}
