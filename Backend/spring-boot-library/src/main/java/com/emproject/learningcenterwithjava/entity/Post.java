package com.emproject.learningcenterwithjava.entity;

import jakarta.persistence.*;
import lombok.Data;

@MappedSuperclass
@Data //dynamically set getters， setters， constructors
public abstract class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //说明id是自增长的主键
    private Long id;

    private String title;

    private String content;
}