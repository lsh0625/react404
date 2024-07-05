package com.mysite.shopbackend.service;

import com.mysite.shopbackend.model.Purchase;
import com.mysite.shopbackend.repository.Projection.PurchaseItem;

import java.util.List;

public interface PurchaseService {
    Purchase savePurchase(Purchase purchase);
    List<PurchaseItem> findPurchaseItemOfUser(String username);
}
