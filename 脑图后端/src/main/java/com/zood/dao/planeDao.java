package com.zood.dao;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.zood.domain.plane;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface planeDao extends BaseMapper<plane> {
    @Select("select * from plane ")
    List<plane> getALL();

}
