package com.FDGood.MojaKuhinja.common;


import jakarta.persistence.GeneratedValue;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.time.Instant;

@Setter
@Getter
@Data
public abstract class  BaseClass {


  @MongoId
  private String id;

  @CreatedDate
  @Field("created_at")
  private Instant createdAt;

  @CreatedDate
  @Field("updated_at")
  private Instant updatedAt;

}
