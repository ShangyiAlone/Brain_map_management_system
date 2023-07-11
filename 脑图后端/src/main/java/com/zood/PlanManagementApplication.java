package com.zood;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.zood.dao")//扫描mapper文件夹
public class PlanManagementApplication {

    public static void main(String[] args) {
        SpringApplication.run(PlanManagementApplication.class, args);
    }

}
