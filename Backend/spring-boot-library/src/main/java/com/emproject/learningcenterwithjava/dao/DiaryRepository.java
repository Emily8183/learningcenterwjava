package com.emproject.learningcenterwithjava.dao;

import com.emproject.learningcenterwithjava.entity.Diary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


//import java.util.List;

//@Repository
//为什么有的地方不需要@Repository
public interface DiaryRepository extends JpaRepository<Diary, Long>{

}
