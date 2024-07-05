package com.mysite.shopbackend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class TestController {
    @GetMapping("/authentication/home")
    public String Home(){
        return "hello";

    }
    @GetMapping("/test")
    public String Test(){
        return "text";
    }

}
