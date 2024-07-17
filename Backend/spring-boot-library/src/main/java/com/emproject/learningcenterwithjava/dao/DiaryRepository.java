package com.emproject.learningcenterwithjava.dao;

import com.emproject.learningcenterwithjava.entity.Diary;
import org.springframework.data.jpa.repository.JpaRepository;


//import java.util.List;
public interface DiaryRepository extends JpaRepository<Diary, Long>{

}
