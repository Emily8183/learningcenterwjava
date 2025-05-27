
package com.emproject.learningcenterwithjava.dao;

import com.emproject.learningcenterwithjava.entity.LeetcodeSolution;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LeetcodeSolutionRepository extends JpaRepository<LeetcodeSolution, Long> {
}
