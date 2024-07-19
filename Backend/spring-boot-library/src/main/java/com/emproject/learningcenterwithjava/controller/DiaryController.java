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

    @GetMapping(path = "/all")
    public List<Diary> getAllDiaries() {
        return diaryService.getAllDiaries();
    }
}
