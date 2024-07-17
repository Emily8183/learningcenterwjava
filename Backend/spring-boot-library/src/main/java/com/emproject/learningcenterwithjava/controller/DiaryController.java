package com.emproject.learningcenterwithjava.controller;

import com.emproject.learningcenterwithjava.dao.DiaryRepository;
import com.emproject.learningcenterwithjava.entity.Diary;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping(path="/demo")
public class DiaryController {
    @Autowired
    private DiaryRepository diaryRepository;

//    @GetMapping
//    public List<Diary> getAllDiaries1() {
//        return diaryRepository.findAll();
//    }

    @PostMapping(path = "/add")
//    public Diary createDiary(@RequestBody Diary diary) {
//    return diaryRepository.save(diary);
//    }

    public @ResponseBody Diary createDiary(@RequestParam String title, @RequestParam String content) {
        Diary diary = new Diary();
        diary.setTitle(title);
        diary.setContent(content);
        return diaryRepository.save(diary);
    }

    @GetMapping(path = "/all")
    public @ResponseBody Iterable<Diary> getAllDiaries() {
        return diaryRepository.findAll();
    }
}
