package com.zood.service;


import com.baomidou.mybatisplus.extension.service.IService;
import com.zood.domain.plane;

import java.util.List;

public interface planeService extends IService<plane> {
    List<plane> getAll();

}
