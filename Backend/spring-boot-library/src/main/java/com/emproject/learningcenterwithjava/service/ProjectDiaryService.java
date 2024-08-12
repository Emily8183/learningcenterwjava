package com.emproject.learningcenterwithjava.service;

import com.emproject.learningcenterwithjava.dao.ProjectDiaryRepository;
import com.emproject.learningcenterwithjava.entity.ProjectDiary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectDiaryService {
    private final ProjectDiaryRepository projectDiaryRepository;
//    什么时候需要加final

    @Autowired
    public ProjectDiaryService(ProjectDiaryRepository projectDiaryRepository) {
        this.projectDiaryRepository = projectDiaryRepository;
    }
    public List<ProjectDiary> getAllProjectDiaries() {
        return projectDiaryRepository.findAll();
    }

}
