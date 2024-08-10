package com.emproject.learningcenterwithjava.entity;

import jakarta.persistence.*;

@Entity
@Table(name="project_diaries")
public class ProjectDiary extends Post{

    @Column(name = "category")
    private String category;

    @Column(name = "projectName")
    private String projectName;
    
}
