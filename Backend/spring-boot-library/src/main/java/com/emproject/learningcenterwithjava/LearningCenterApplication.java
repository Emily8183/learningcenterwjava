package com.emproject.learningcenterwithjava;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Import;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
//@Import(MyCorsConfig.class)
//@EnableJpaRepositories("com.emproject.learningcenterwithjava.dao")
//@ComponentScan("com.emproject.learningcenterwithjava.*")
//@EntityScan("com.emproject.learningcenterwithjava.entity")
public class LearningCenterApplication {

	public static void main(String[] args) {
		SpringApplication.run(LearningCenterApplication.class, args);
	}

}
