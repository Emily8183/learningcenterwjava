package com.emproject.learningcenterwithjava.entity;


import lombok.Data;
import javax.persistence.*;

@Entity
@Table(name="diary")
@Data //dynamically set getters and setters
public class Diary {



    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //说明id是自增长的主键
    @Column(name = "id")
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "content")
    private String content;
}