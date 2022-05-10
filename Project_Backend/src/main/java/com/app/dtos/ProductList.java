package com.app.dtos;
import java.util.List;

import com.app.pojos.Products;

public class ProductList {

	private List<Products> productList;

	public ProductList() {
		// TODO Auto-generated constructor stub
	}
	public ProductList(List<Products> productList) {
		super();
		this.productList = productList;
	}
	
	public List<Products> getProductList() {
		return productList;
	}
	public void setProductList(List<Products> productList) {
		this.productList = productList;
	}
	@Override
	public String toString() {
		return "ProductList [productList=" + productList + "]";
	}
}
