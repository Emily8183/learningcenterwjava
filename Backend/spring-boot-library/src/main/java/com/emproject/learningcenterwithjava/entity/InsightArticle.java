package com.emproject.learningcenterwithjava.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name="Insights_article")
public class InsightArticle extends Post{
    @Column(name = "category")
    private String category;

    @Column(name = "imageURL")
    private String imageURL;
}
