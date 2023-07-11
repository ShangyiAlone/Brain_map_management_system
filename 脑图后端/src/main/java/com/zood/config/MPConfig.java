package com.zood.config;

import com.baomidou.mybatisplus.extension.plugins.MybatisPlusInterceptor;
import com.baomidou.mybatisplus.extension.plugins.inner.PaginationInnerInterceptor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MPConfig {
    //设置拦截器
    @Bean
    public MybatisPlusInterceptor mybatisPlusInterceptor(){
        //创建放拦截器的容器
        MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor();
        //增添拦截器
        interceptor.addInnerInterceptor(new PaginationInnerInterceptor());
        return interceptor;
    }
}
