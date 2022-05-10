package com.app.service;

import java.util.Optional;
import java.util.List;
import com.app.pojos.Products;
import com.app.pojos.Stockshops;

public interface IProductService {
	
	Optional<Products> findById(int id);
	
	String increaseProductLikes(int id);
	
    List<Products> findByCategory(String category);
    
    List<Products> getAllProduct(Stockshops shopId);
}
