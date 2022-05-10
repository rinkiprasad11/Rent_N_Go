package com.app.service;

import java.util.List;
import java.util.Map;

import com.app.dtos.ProductCart;
import com.app.dtos.ProductList;
import com.app.pojos.Products;

public interface ICartService {
	
	void addProduct( int productId);
	void removeProduct( int productId);
	List<ProductCart> getProductInCart();
	
	
}
