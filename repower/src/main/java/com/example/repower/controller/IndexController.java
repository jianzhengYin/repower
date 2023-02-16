package com.example.repower.controller;

import com.example.repower.model.AdminList;
import com.example.repower.service.AdminListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
@CrossOrigin
@Controller
public class IndexController {
    @Autowired
    private AdminListService adminListService;
    @RequestMapping(value = "/index")
    public @ResponseBody Object index(@RequestParam(name = "id",required = false) Integer id){

        AdminList adminList = adminListService.queryAdminById(id);
        return adminList;
    }

    @RequestMapping("/getDemoHtml")
    public String getDemoHtml(){
        //此处是需要展示的html在templates下的具体路径
        return "home";
    }
}
