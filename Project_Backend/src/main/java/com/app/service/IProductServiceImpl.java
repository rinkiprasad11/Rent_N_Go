package com.app.service;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import com.app.dao.ProductRepository;
import com.app.pojos.Products;
import com.app.pojos.Stockshops;
@Service
@Transactional
public class IProductServiceImpl implements IProductService {
	
	@Autowired
	private ProductRepository productRepo;
	@Override
	public Optional<Products> findById(int id) {
		
		return productRepo.findById(id);
	}

	@Override
	public String increaseProductLikes(int id) {
		System.out.println(" in increase product likes "+id);
		String message = "Product likes increased ";
		Products product = findById(id).get();
		int presentLikes = product.getLikes();
		product.setLikes(presentLikes + 1);
		if(product.getLikes() != presentLikes + 1)
			message = "product likes not increased";
		return message;
	}
	@Override
	public List<Products> findByCategory(String category) {
		return productRepo.findByCategory(category);
	}
	@Override
	public List<Products> getAllProduct(Stockshops shopId) {		
		System.out.println("in get product to user");
		List<Products> productList = productRepo.findByShopId(shopId);		
		System.out.println("list of products: "+productList);
		return productList;
	}

}
