package com.example.repower.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
    @RequestMapping("/admin")
    public String getDemoHtml(){
        //此处是需要展示的html在templates下的具体路径
        return "admin";
    }
}
