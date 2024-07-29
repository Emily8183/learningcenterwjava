package com.emproject.learningcenterwithjava.service;

import com.emproject.learningcenterwithjava.dao.DiaryRepository;
import com.emproject.learningcenterwithjava.entity.Diary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DiaryService {
    private final DiaryRepository diaryRepository;
//    什么时候需要加final

    @Autowired
    public DiaryService(DiaryRepository diaryRepository) {
        this.diaryRepository = diaryRepository;
    }
    public List<Diary> getAllDiaries() {
        return diaryRepository.findAll();
    }

}