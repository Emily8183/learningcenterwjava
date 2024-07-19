package com.emproject.learningcenterwithjava.controller;

import com.emproject.learningcenterwithjava.dao.DiaryRepository;
import com.emproject.learningcenterwithjava.entity.Diary;

import com.emproject.learningcenterwithjava.service.DiaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("")
public class DiaryController {
    private final DiaryService diaryService;
//    object intialization for DiaryService
    @Autowired
    public DiaryController(DiaryService diaryService) {
        this.diaryService = diaryService;
    }

//    @GetMapping
//    public List<Diary> getAllDiaries1() {
//        return diaryRepository.findAll();
//    }

    @PostMapping(path = "/add")
//    public Diary createDiary(@RequestBody Diary diary) {
//    return diaryRepository.save(diary);
//    }

    @GetMapping(path = "/all")
    public @ResponseBody Iterable<Diary> getAllDiaries() {
        return DiaryService.findAll();
    }
}
