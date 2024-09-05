package com.emproject.learningcenterwithjava.controller;

import com.emproject.learningcenterwithjava.dao.InsightArticlesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/insightArticles")
public class InsightArticlesController {

    @Autowired
    private InsightArticlesRepository insightArticlesRepository;
}
