package com.fanray.controller;

import com.fanray.dto.OrderInfo;
import com.fanray.order.OrderDao;
import com.fanray.order.OrderDaoIFC;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
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
    private final Logger log = LoggerFactory.getLogger(Order.class);

    @Autowired
    private OrderDaoIFC orderDao;

    @RequestMapping(value = "orderAction",method = RequestMethod.POST)
    public String orderAction(RedirectAttributes attributes,String product,String yanse,String name,String mob,String province,String city,String area,String address){
        Map paramMap = new HashMap();
        OrderInfo orderInfo = new OrderInfo();
        orderInfo.setProduct(product);
        orderInfo.setStyle(yanse);
        orderInfo.setName(name);
        orderInfo.setAddress(address);
        orderInfo.setTel(mob);
        attributes.addFlashAttribute("product",product);
        attributes.addFlashAttribute("style", yanse);
        attributes.addFlashAttribute("name", name);
        attributes.addFlashAttribute("tel", mob);
        String addr = province+","+city+","+area+","+address;
        try {
            orderDao.addOrder(orderInfo);
            attributes.addFlashAttribute("address", addr);
            return "redirect:/tosuccess";
        }catch (Exception e){
            log.error("insert into DB error",e);
            return "redirect:/notorder";
        }


    }

    @RequestMapping(value = "queryOrder",method = RequestMethod.GET,produces="text/html;charset=UTF-8")
    public String queryOrder(Model model){
        List<OrderInfo> orderInfoList = new ArrayList<OrderInfo>();
        OrderInfo orderInfo = new OrderInfo();
        orderInfo.setAddress("按客户");
        orderInfo.setName("testName");
        orderInfo.setTel("testTel");
        orderInfoList.add(orderInfo);
        model.addAttribute("orderInfo", orderInfoList);
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
