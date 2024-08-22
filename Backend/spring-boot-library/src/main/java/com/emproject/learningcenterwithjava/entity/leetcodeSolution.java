package com.emproject.learningcenterwithjava.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name="leetcodeSolution")
public class leetcodeSolution extends Post{

    @Column(name = "dataStructure")
    private String dataStructure;

    @Column(name = "algorithm")
    private String algorithm;

    @Column(name = "difficulty")
    private String difficulty;

}