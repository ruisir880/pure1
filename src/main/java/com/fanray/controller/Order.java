package com.fanray.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.support.RedirectAttributesModelMap;

/**
 * Created by Ray Rui on 5/16/2017.
 */
@Controller
public class Order {
    @RequestMapping(value = "orderAction",method = RequestMethod.POST)
    //@ResponseBody
    public String orderAction(RedirectAttributesModelMap redirect,String username,String password,Model model){
        model.addAttribute("name","test");
        return "success";
    }

    @RequestMapping(value = "queryOrder",method = RequestMethod.GET)
    public String queryOrder(){
        return "index";
    }

    @RequestMapping(value = "tosuccess",method = RequestMethod.GET,produces="text/html;charset=UTF-8")
    public String tosuccess(Model model){
        model.addAttribute("name","testName");
        model.addAttribute("address", "安徽是的佳得乐");
        return "success";
    }
}
