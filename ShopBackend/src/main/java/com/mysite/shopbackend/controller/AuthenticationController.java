package com.mysite.shopbackend.controller;

import com.mysite.shopbackend.model.User;
import com.mysite.shopbackend.service.AuthenticationService;
import com.mysite.shopbackend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/authentication")
@RequiredArgsConstructor
public class AuthenticationController {
    private final AuthenticationService authenticationService;
    private final UserService userService;
    @PostMapping("/sign-up")
    public ResponseEntity<Object> signUp(@RequestBody User user){
        if(userService.findByUsername(user.getUsername()).isPresent()){
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        return new ResponseEntity<>(userService.saveUser(user),HttpStatus.CREATED);
    }
    @PostMapping("/sign-in")
    public ResponseEntity<Object> signIN(@RequestBody User user){
        return new ResponseEntity<>(authenticationService.signInAndReturnJWT(user),HttpStatus.OK);
    }
}
