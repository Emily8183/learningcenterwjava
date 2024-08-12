package com.emproject.learningcenterwithjava.controller;

import com.emproject.learningcenterwithjava.dao.ProjectDiaryRepository;
import com.emproject.learningcenterwithjava.entity.Diary;
import com.emproject.learningcenterwithjava.entity.ProjectDiary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@RestController
@RequestMapping("api/projectDiaries")
public class ProjectDiaryController {
    @Autowired
    private ProjectDiaryRepository projectDiaryRepository;

    @GetMapping("")
    public ResponseEntity<CollectionModel<EntityModel<ProjectDiary>>> getAllProjectDiaries() {
        List<EntityModel<ProjectDiary>> projectDiaries = projectDiaryRepository.findAll().stream()
                .map(projectDiary -> EntityModel.of(projectDiary,
                        linkTo(methodOn(ProjectDiaryController.class).getProjectDiaryById(projectDiary.getId())).withSelfRel()))
                .collect(Collectors.toList());

        return ResponseEntity.ok(CollectionModel.of(projectDiaries,
                linkTo(methodOn(ProjectDiaryController.class).getAllProjectDiaries()).withSelfRel()));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProjectDiary> getProjectDiaryById(@PathVariable Long id) {
        Optional<ProjectDiary> projectDiary = projectDiaryRepository.findById(id);
        return projectDiary.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }
}
