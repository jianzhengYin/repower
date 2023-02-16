package com.example.repower.impl;

import com.example.repower.mapper.AdminListMapper;
import com.example.repower.model.AdminList;
import com.example.repower.service.AdminListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminListServiceImpl implements AdminListService {

    @Autowired
    private AdminListMapper adminListMapper;
    @Override
    public AdminList queryAdminById(Integer id) {
        return adminListMapper.selectByPrimaryKey(id);
    }
}
