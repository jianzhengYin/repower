package com.example.repower.mapper;

import com.example.repower.model.AdminList;
import org.apache.ibatis.annotations.Mapper;
@Mapper
public interface AdminListMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(AdminList record);

    int insertSelective(AdminList record);

    AdminList selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(AdminList record);

    int updateByPrimaryKey(AdminList record);
}