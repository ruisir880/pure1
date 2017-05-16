package com.fanray.order;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementSetter;
import org.springframework.stereotype.Service;

import javax.sql.DataSource;
import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by Ray Rui on 5/16/2017.
 */
@Service
public class OrderDao {
    String sql = "Insert into order ";

    @Autowired
    private JdbcTemplate jdbcTemplate;
    private void addOrder(){
        jdbcTemplate.update(sql, new PreparedStatementSetter() {
            public void setValues(PreparedStatement ps) throws SQLException {

            }
        });
    }
}
