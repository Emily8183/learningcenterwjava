package com.emproject.learningcenterwithjava.service;

import com.emproject.learningcenterwithjava.dao.DiaryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Scanner;

@Service
public class DiaryService {
    private DiaryRepository diaryRepository;

    @Autowired
    public DiaryService(DiaryRepository diaryRepository) {
        this.diaryRepository = diaryRepository;
    }
//    List<Diary> diaries = diaryRepository.findAll();

}