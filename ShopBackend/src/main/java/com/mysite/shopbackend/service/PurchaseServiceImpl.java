package com.mysite.shopbackend.service;

import com.mysite.shopbackend.model.Purchase;
import com.mysite.shopbackend.model.User;
import com.mysite.shopbackend.repository.Projection.PurchaseItem;
import com.mysite.shopbackend.repository.PurchaseRepository;
import com.mysite.shopbackend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PurchaseServiceImpl implements PurchaseService{
    private final UserRepository userRepository;
    private final PurchaseRepository purchaseRepository;
    @Override
    public Purchase savePurchase(Purchase purchase) {
        purchase.setPurchaseTime(LocalDateTime.now());
        return purchaseRepository.save(purchase);
    }

    @Override
    public List<PurchaseItem> findPurchaseItemOfUser(String username) {
        User user=userRepository.findByUsername(username).orElseThrow();
        return purchaseRepository.findAllPurchasesOfUser(user.getId());
    }
}
