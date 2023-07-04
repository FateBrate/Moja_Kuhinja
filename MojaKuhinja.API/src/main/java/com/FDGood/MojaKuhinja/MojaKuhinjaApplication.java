package com.FDGood.MojaKuhinja;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class MojaKuhinjaApplication {

	public static void main(String[] args) {
		SpringApplication.run(MojaKuhinjaApplication.class, args);
	}

@Bean
  public WebMvcConfigurer corsConfiguerer(){
    return  new WebMvcConfigurer() {
      @Override
      public void addCorsMappings(CorsRegistry registry) {
        WebMvcConfigurer.super.addCorsMappings(registry);
      }
    };
}
}
