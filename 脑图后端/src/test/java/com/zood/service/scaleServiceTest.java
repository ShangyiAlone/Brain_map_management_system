package com.zood.service;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
public class scaleServiceTest {

    @Autowired
    private planeService plane;

    @Test
    void testGetById2(){
        List<com.zood.domain.plane> params= plane.getAll();
        for (int i = 0 ;i<params.size();i++){
            System.out.println(params.get(i));
        }


    }


}
