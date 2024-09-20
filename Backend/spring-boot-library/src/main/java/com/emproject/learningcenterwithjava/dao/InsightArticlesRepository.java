package com.emproject.learningcenterwithjava.dao;

import com.emproject.learningcenterwithjava.entity.InsightArticle;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InsightArticlesRepository extends JpaRepository<InsightArticle, Long> {
}
