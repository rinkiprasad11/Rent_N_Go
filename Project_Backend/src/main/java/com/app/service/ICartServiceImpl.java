package com.app.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.ProductRepository;
import com.app.dtos.ProductCart;
import com.app.pojos.Products;

@Service
@Transactional
public class ICartServiceImpl implements ICartService {
	@Autowired
	private IProductService productService;

	private Map<Integer, Integer> products = new HashMap<>();

	@Override
	public void addProduct(int product) {
		System.out.println(products.values());
		if (products.containsKey(product)) {
			System.out.println(products.get(product));
			products.replace(product,products.get(product) + 1);
		} else {
			System.out.println("in else");
			products.put(product, 1);
		}

	}

	@Override
	public void removeProduct(int product) {
		System.out.println(product);
		if (products.containsKey(product)) {
			if (products.get(product) > 1)
				products.replace(product, products.get(product) - 1);
			else if (products.get(product) == 1) {
				products.remove(product);
			}
		}
	}

	@Override
	public List<ProductCart> getProductInCart() {
		Products product;
		List<ProductCart> productcartList= new ArrayList<>();
		//Map<Products, Integer> productMap = new HashMap<Products, Integer>();
		
		Iterator<Map.Entry<Integer, Integer>> entries = products.entrySet().iterator();
		while (entries.hasNext()) {
			Map.Entry<Integer, Integer> entry = entries.next();
			
			
			product=productService.findById(entry.getKey()).get();
			productcartList.add( new ProductCart(product.getId(),product.getName(),product.getRent(),entry.getValue()));
			System.out.println(productcartList);
			System.out.println("Key = " + entry.getKey() + ", Value = " + entry.getValue());
		}
		return productcartList;
	}

}
