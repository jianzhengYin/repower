package com.demo.test;

import com.demo.dao.userDao;
import com.demo.domain.User;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.junit.Test;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;


public class MybatisTest {

    @Test
    public void mybatisTest() throws Exception {
        //1.读取配置文件
        InputStream stream = Resources.getResourceAsStream("SqlMapConfig.xml");
        //2.创建SqlSessionFactory工厂
        SqlSessionFactoryBuilder builder = new SqlSessionFactoryBuilder();
        SqlSessionFactory build = builder.build(stream);
        //3.使用工厂创建SqlSession对象
        SqlSession sqlSession = build.openSession();
        //4.使用SqlSession创建dao的代理对象
        userDao dao = sqlSession.getMapper(userDao.class);
        //5.使用代理对象执行方法
        List<User> users = dao.findAllUsers();
        for (User user : users
        ) {
            System.out.println("user = " + user);
        }
        //6.关闭资源
        sqlSession.close();
        stream.close();
    }
}
