package com.mysite.shopbackend.controller;

import com.mysite.shopbackend.model.Role;
import com.mysite.shopbackend.security.UserPrinciple;
import com.mysite.shopbackend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;
    @PutMapping("/change/{role}")
    public ResponseEntity<Object> changeRole(@AuthenticationPrincipal UserPrinciple userPrinciple,
                                            @PathVariable Role role){
        userService.changeRole(role,userPrinciple.getUsername());
        return ResponseEntity.ok(true);
    }

}
