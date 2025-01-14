package com.mysite.shopbackend.service;

import com.mysite.shopbackend.model.User;
import com.mysite.shopbackend.security.UserPrinciple;
import com.mysite.shopbackend.security.jwt.JwtProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;

@Service
@RequiredArgsConstructor

public class AuthenticationServiceImpl implements AuthenticationService{
private final AuthenticationManager authenticationManager;
private final JwtProvider jwtProvider;
    @Override
    public User signInAndReturnJWT(User signInRequest) {
        Authentication authentication=authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(signInRequest.getUsername(),signInRequest.getPassword())
        );
        UserPrinciple userPrinciple=(UserPrinciple) authentication.getPrincipal();
        String jwt=jwtProvider.generateToken(userPrinciple);
        User signInUser=userPrinciple.getUser();
        signInUser.setToken(jwt);
        return signInUser;
    }
}
