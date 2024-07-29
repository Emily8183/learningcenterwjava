package com.emproject.learningcenterwithjava.controller;

import com.emproject.learningcenterwithjava.dao.DiaryRepository;
import com.emproject.learningcenterwithjava.entity.Diary;

import com.emproject.learningcenterwithjava.service.DiaryService;
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

//@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/diaries")
public class DiaryController {
//    private final DiaryService diaryService;
//    object intialization for DiaryService

//    @Autowired
//    public DiaryController(DiaryService diaryService) {
//        this.diaryService = diaryService;
//    }

    @Autowired
    private DiaryRepository diaryRepository;

//    public DiaryController(DiaryService diaryService) {
//        this.diaryService = diaryService;
//    }

    @GetMapping("")
    public ResponseEntity<CollectionModel<EntityModel<Diary>>> getAllDiaries() {
        List<EntityModel<Diary>> diaries = diaryRepository.findAll().stream()
                .map(diary -> EntityModel.of(diary,
                        linkTo(methodOn(DiaryController.class).getDiaryById(diary.getDiary_id())).withSelfRel()))
                .collect(Collectors.toList());

        return ResponseEntity.ok(CollectionModel.of(diaries,
                linkTo(methodOn(DiaryController.class).getAllDiaries()).withSelfRel()));
    }

    @GetMapping("/{diary_id}")
    public ResponseEntity<Diary> getDiaryById(@PathVariable Long diary_id) {
        Optional<Diary> diary = diaryRepository.findById(diary_id);
        if (diary.isPresent()) {
            return ResponseEntity.ok(diary.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("")
    public ResponseEntity<Diary> createDiary(@RequestBody Diary diary) {
        Diary createdDiary = diaryRepository.save(diary);
        return ResponseEntity.ok(createdDiary);
    }

    @DeleteMapping("/{diary_id}")
    public ResponseEntity<Void> deleteDiary(@PathVariable Long diary_id) {
        Optional<Diary> optionalDiary = diaryRepository.findById(diary_id);

        if (!optionalDiary.isPresent()) {
            return ResponseEntity.notFound().build();
        }

        diaryRepository.deleteById(diary_id);

        return ResponseEntity.noContent().build();
    }
}
