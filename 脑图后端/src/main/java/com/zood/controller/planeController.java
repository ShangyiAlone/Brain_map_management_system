package com.zood.controller;

import com.zood.controller.utils.R1;
import com.zood.domain.plane;
import com.zood.service.planeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletResponse;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.TimeZone;

@CrossOrigin
@RestController
@RequestMapping("/plane")
public class planeController {
    @Autowired
    private planeService planeService;

    @GetMapping
    public R1 getAll() throws ParseException {

        List<plane> res = planeService.getAll();

        return new R1(true, res);
    }

}