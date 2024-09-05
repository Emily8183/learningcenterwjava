package com.emproject.learningcenterwithjava.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name="leetcodeSolution")
public class LeetcodeSolution extends Post{

    @Column(name = "dataStructure")
    private String dataStructure;

    @Column(name = "algorithm")
    private String algorithm;

    @Column(name = "difficulty")
    private String difficulty;

    @Column(name = "imageURL")
    private String imageURL;

}