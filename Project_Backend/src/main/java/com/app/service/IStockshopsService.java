package com.app.service;

import java.util.List;

import org.springframework.data.jpa.repository.Query;

import com.app.dtos.ShopDTO;
import com.app.dtos.UpdateProductDTO;
import com.app.pojos.Category;
import com.app.pojos.Products;
import com.app.pojos.Stockshops;

public interface IStockshopsService {
	Stockshops addNewStockshops(Stockshops shop);

	String deleteStockshops(int shopId);

	List<Stockshops> findByName(String Name);

	Stockshops updateVendorDetails(int shopId, ShopDTO shopDTO);

	List<Stockshops> displayStockshopss(String pincode);
	
	Products addProducts(Products products, Stockshops stockshops, Category category);
	
	String updateProductDetails(UpdateProductDTO productDTO, int shopId, int productId);

	String deleteProductFromList(int shopId, int productId);

	String  acceptIncomingOrder(int id);
	
	String declineIncomingOrder(int id);

	String addAddress(int id, String address);
	
	Stockshops authenticateShop(String email, String password);

	@Query("select s.id , s.name, s.email, s.mob, s.pincode from Stockshops s")
	List<Stockshops> shopList();

	Stockshops findByShopId(int id);
	
	List<Stockshops> getAllStockshops();

	int shopcount();

}
