package com.zood.dao;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@SpringBootTest
public class scaleTest {


    @Autowired
    private planeDao plane;

    @Test
    void testGetById4() throws ParseException {
        com.zood.domain.plane users = plane.selectById(4);
//        System.out.println(users.getCreateTime());

        //获取当前日期
        SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date date=new Date();
        String currentDate=sdf.format(date);
        String createDate=sdf.format(users.getCreateTime());

        //将string格式转化为date
        Date date1 = sdf.parse(currentDate);
        Date date2 = sdf.parse(createDate);
        System.out.println(date1);
        System.out.println(date2);

        //得到计算出时间差
        long diff1 = date1.getTime() - date2.getTime(); //毫秒
        long diff = 3600000*8+date1.getTime() - date2.getTime();
        long diffSeconds = diff / 1000 % 60;
        long diffMinutes = diff / (60 * 1000) % 60;
        long diffHours = diff / (60 * 60 * 1000) % 24;
        long diffDays = diff / (24 * 60 * 60 * 1000);

//        System.out.print("两个时间相差：");
//        System.out.print(diffDays + " 天, ");
//        System.out.print(diffHours + " 小时, ");
//        System.out.print(diffMinutes + " 分钟, ");
//        System.out.print(diffSeconds + " 秒.");

    }

}
