package com.fanray.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.mvc.support.RedirectAttributesModelMap;
import org.springframework.web.servlet.support.RequestContextUtils;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

/**
 * Created by Ray Rui on 5/16/2017.
 */
@Controller
public class Order {
    @RequestMapping(value = "orderAction",method = RequestMethod.POST)
    //@ResponseBody
    public String orderAction(RedirectAttributes attributes,String product,String yanse,String name,String mob,String province,String city,String area,String address){
        attributes.addAttribute("product",product);
        attributes.addAttribute("yanse", yanse);
        attributes.addAttribute("name", name);
        attributes.addAttribute("mob", mob);
        String addr = province+","+city+","+area+","+address;
        attributes.addAttribute("address",addr);
        return "redirect:/tosuccess";
    }

    @RequestMapping(value = "queryOrder",method = RequestMethod.GET)
    public String queryOrder(){
        return "index";
    }

    @RequestMapping(value = "tosuccess",method = RequestMethod.GET,produces="text/html;charset=UTF-8")
    public String tosuccess(HttpServletRequest request,Model model){
        Map<String,?> map = RequestContextUtils.getInputFlashMap(request);
        model.addAllAttributes(map);
        return "success";
    }


    @RequestMapping(value = "/login",method = RequestMethod.POST)
    public String login(String username,String password,Model model){
        return "allorderList";
    }

}
