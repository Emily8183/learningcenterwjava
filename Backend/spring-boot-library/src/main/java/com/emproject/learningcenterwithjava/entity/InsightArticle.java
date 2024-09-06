package com.emproject.learningcenterwithjava.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name="Insights_articles")
public class InsightArticles extends Post{
    @Column(name = "category")
    private String category;
}
