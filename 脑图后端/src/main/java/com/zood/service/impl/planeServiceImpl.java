package com.zood.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.zood.dao.planeDao;
import com.zood.domain.plane;
import com.zood.service.planeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class planeServiceImpl extends ServiceImpl<planeDao, plane> implements planeService {
    @Autowired
    private planeDao plane1;

    //得到所有的飞机数据
    public List<plane> getAll() {
        return plane1.getALL();
    }



}
