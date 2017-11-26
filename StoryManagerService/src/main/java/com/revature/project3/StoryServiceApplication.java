package com.revature.project3;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@EnableEurekaClient
@SpringBootApplication
public class StoryServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(StoryServiceApplication.class, args);
	}
}
