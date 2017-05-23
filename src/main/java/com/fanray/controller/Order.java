package com.fanray.controller;

import com.fanray.dto.OrderInfo;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.support.RequestContextUtils;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by Ray Rui on 5/16/2017.
 */
@Controller
public class Order {
    @RequestMapping(value = "orderAction",method = RequestMethod.POST)
    //@ResponseBody
    public String orderAction(RedirectAttributes attributes,String product,String yanse,String name,String mob,String province,String city,String area,String address){
        Map paramMap = new HashMap();
        attributes.addFlashAttribute("product",product);
        attributes.addFlashAttribute("style", yanse);
        attributes.addFlashAttribute("name", name);
        attributes.addFlashAttribute("tel", mob);
        String addr = province+","+city+","+area+","+address;
        attributes.addFlashAttribute("address",addr);
        return "redirect:/tosuccess";
    }

    @RequestMapping(value = "queryOrder",method = RequestMethod.GET,produces="text/html;charset=UTF-8")
    public String queryOrder(Model model){
        List<OrderInfo> orderInfoList = new ArrayList<OrderInfo>();
        OrderInfo orderInfo = new OrderInfo();
        orderInfo.setAddress("啊的链接");
        orderInfo.setName("testName");
        orderInfo.setTel("testTel");
        orderInfoList.add(orderInfo);
        model.addAttribute("orderInfo", orderInfoList);
        model.addAttribute("test", "吐舌头");
        return "orderList";
    }

    @RequestMapping(value = "tosuccess",method = RequestMethod.GET,produces="text/html;charset=UTF-8")
    public String tosuccess(HttpServletRequest request,Model model){
        //model.addAllAttributes( request.getParameterMap());
        Map<String,?> map = RequestContextUtils.getInputFlashMap(request);
        model.addAllAttributes(map);
        return "success";
    }

    @RequestMapping(value = "indexAction",method = RequestMethod.GET)
    public String index(){
        return "index";
    }


    @RequestMapping(value = "/login",method = RequestMethod.POST)
    public String login(String username,String password,Model model){
        return "allorderList";
    }

}
