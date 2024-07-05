package com.mysite.shopbackend.service;

import com.mysite.shopbackend.model.User;

public interface AuthenticationService {
    public User signInAndReturnJWT(User signInRequest);
}
