package com.emproject.learningcenterwithjava.controller;

import com.emproject.learningcenterwithjava.dao.LeetcodeSolutionRepository;
import com.emproject.learningcenterwithjava.entity.LeetcodeSolution;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

//@CrossOrigin(origins = "http://localhost:5174")
@RestController
@RequestMapping("api/leetcodeSolutions")
public class LeetcodeSolutionController {
    @Autowired
    private LeetcodeSolutionRepository leetcodeSolutionRepository;

    @GetMapping("")
    public ResponseEntity<CollectionModel<EntityModel<LeetcodeSolution>>> getAllLeetcodeSolution() {
        List<EntityModel<LeetcodeSolution>> leetcodeSolutions = leetcodeSolutionRepository.findAll().stream()
                .map(leetcodeSolution -> EntityModel.of(leetcodeSolution,
                        linkTo(methodOn(LeetcodeSolutionController.class).getLeetcodeSolutionById(leetcodeSolution.getId())).withSelfRel()))
                .collect(Collectors.toList());

        return ResponseEntity.ok(CollectionModel.of(leetcodeSolutions,
                linkTo(methodOn(LeetcodeSolutionController.class).getAllLeetcodeSolution()).withSelfRel()));
    }

    @GetMapping("/{id}")
    public ResponseEntity<LeetcodeSolution> getLeetcodeSolutionById(@PathVariable Long id) {
        Optional<LeetcodeSolution> leetcodeSolution= leetcodeSolutionRepository.findById(id);
        return leetcodeSolution.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

}
