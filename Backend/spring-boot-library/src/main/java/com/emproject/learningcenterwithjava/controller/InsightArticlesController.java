package com.emproject.learningcenterwithjava.controller;

import com.emproject.learningcenterwithjava.dao.InsightArticlesRepository;
import com.emproject.learningcenterwithjava.entity.InsightArticle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@RestController
@RequestMapping("api/insightArticles")
public class InsightArticlesController {

    @Autowired
    private InsightArticlesRepository insightArticlesRepository;

    @GetMapping("")
    public ResponseEntity<CollectionModel<EntityModel<InsightArticle>>> getAllInsightArticles() {
        List<EntityModel<InsightArticle>> insightArticles = insightArticlesRepository.findAll().stream()
                .map(insightArticle -> EntityModel.of(insightArticle,
                        linkTo(methodOn(InsightArticlesController.class).getInsightArticlesById(insightArticle.getId())).withSelfRel()))
                .collect(Collectors.toList());

        return ResponseEntity.ok(CollectionModel.of(insightArticles,
                linkTo(methodOn(InsightArticlesController.class).getAllInsightArticles()).withSelfRel()));
    }

    @GetMapping("/{id}")
    public ResponseEntity<InsightArticle> getInsightArticlesById(@PathVariable Long id) {
        Optional<InsightArticle> insightArticles = insightArticlesRepository.findById(id);
        return insightArticles.map(ResponseEntity::ok).orElseGet(()->ResponseEntity.notFound().build());
    }
}

