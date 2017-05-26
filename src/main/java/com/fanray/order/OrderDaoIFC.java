package com.fanray.order;

import com.fanray.dto.OrderInfo;

import java.util.List;

/**
 * Created by Ray Rui on 5/26/2017.
 */
public interface OrderDaoIFC {
    void addOrder(final OrderInfo orderInfo);

    List<String> queryByTel(String tel);
}
