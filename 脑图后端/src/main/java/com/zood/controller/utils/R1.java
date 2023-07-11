package com.zood.controller.utils;

import lombok.Data;

@Data
public class R1 {
    private Boolean flag;
    private Object data;
    private String msg;


    public R1(Boolean flag,Object data){
        this.flag = flag;
        this.data = data;
    }

    public R1(String msg){
        this.msg = msg;
    }

}

