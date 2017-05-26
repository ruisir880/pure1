package com.fanray.order;

import com.fanray.dto.OrderInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementSetter;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Service;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Ray Rui on 5/16/2017.
 */
@Service
public class OrderDao implements OrderDaoIFC{
    String insertSql = "Insert into orders(product,style,NAME ,tel,address) VALUES (?,?,?,?,?)";

    String queryByTel = "select delno from orders where tel=?";

    String queryAll = "select * from orders where tel=?";

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public void addOrder(final OrderInfo orderInfo){
        jdbcTemplate.update(insertSql, new PreparedStatementSetter() {
            public void setValues(PreparedStatement ps) throws SQLException {
                ps.setString(0,orderInfo.getProduct());
                ps.setString(1,orderInfo.getStyle());
                ps.setString(2,orderInfo.getName());
                ps.setString(3,orderInfo.getTel());
                ps.setString(4,orderInfo.getAddress());
            }
        });
    }

    public List<String> queryByTel(String tel){
        SqlRowSet rowSet = jdbcTemplate.queryForRowSet(insertSql, tel);
        List<String> delNoList = new ArrayList<String>();
        while (rowSet.next()){
            delNoList.add(rowSet.getString("delno"));
        }
        return delNoList;
    }


}
