package com.emproject.learningcenterwithjava.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name="projectdiary")
public class ProjectDiary extends Post{

    @Column(name = "category")
    private String category;

    @Column(name = "projectName")
    private String projectName;


}
