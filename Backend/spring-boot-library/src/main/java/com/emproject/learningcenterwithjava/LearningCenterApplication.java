package com.emproject.learningcenterwithjava;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
//@EnableJpaRepositories("com.emproject.learningcenterwithjava.repository")
public class LearningCenterApplication {

	public static void main(String[] args) {
		SpringApplication.run(LearningCenterApplication.class, args);
	}

}
