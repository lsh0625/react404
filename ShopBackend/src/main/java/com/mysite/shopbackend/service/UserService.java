package com.mysite.shopbackend.service;

import com.mysite.shopbackend.model.Role;
import com.mysite.shopbackend.model.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    User saveUser(User user);
    Optional<User> findByUsername(String username);
    void changeRole(Role newRole, String username);
    List<User> userAll();

}
