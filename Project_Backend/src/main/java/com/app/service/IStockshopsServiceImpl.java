package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_excs.ResourceNotFoundException;
import com.app.dao.AddressRepository;
import com.app.dao.ProductRepository;
import com.app.dao.OrderRepository;
import com.app.dao.StockshopsRepository;
import com.app.dtos.ShopDTO;
import com.app.dtos.UpdateProductDTO;
import com.app.pojos.Address;
import com.app.pojos.Category;
import com.app.pojos.Products;
import com.app.pojos.Order;
import com.app.pojos.OrderStatus;
import com.app.pojos.Stockshops;

@Service
@Transactional
public class IStockshopsServiceImpl implements IStockshopsService {

	@Autowired
	private StockshopsRepository shopRepo;
	@Autowired
	private ProductRepository productRepo;
	@Autowired
	private OrderRepository orderRepo;
	@Autowired
	private AddressRepository addRepo;

	@Override
	public Stockshops addNewStockshops(Stockshops shop) {
		System.out.println("in service of shop: "+ shop);
		System.out.println("shop"+ shop.getId());
		return shopRepo.save(shop);
	}
	@Override
	public String deleteStockshops(int shopId) {
		boolean exists = shopRepo.existsById(shopId);
		if (!exists)
			throw new ResourceNotFoundException("Invalid user id!!!!!");
		shopRepo.deleteById(shopId);
		return "Stockshops with Id"+shopId+"deleted";
	}
	@Override
	public List<Stockshops> findByName(String Name) {
		return shopRepo.findByName(Name);
	}
	@Override
	public Stockshops updateVendorDetails(int shopId, ShopDTO shopDTO) {
		System.out.println("in update "+shopDTO);		
		Stockshops shopDetails=shopRepo.findById(shopId);
		//System.out.println("shopId " +shopDetails.getId());
		System.out.println("user dtls from db "+shopDetails);		
		BeanUtils.copyProperties(shopDTO, shopDetails, "email");
		System.out.println("updated vendor dtls "+shopDetails);		
		return shopDetails;		
	}

	@Override
	public List<Stockshops> displayStockshopss(String pincode) {
		System.out.println(" in display stockshops service method "+pincode);
		List<Stockshops> shopList = shopRepo.findByPincode(pincode);
		System.out.println("list of stockshopss  "+shopList);
		return shopList;
	}
	@Override
	public Products addProducts(Products product, Stockshops stockshops, Category category) {
		product.setShopId(stockshops);
		product.setCategory(category);
		Products products = productRepo.save(product);
		return products;
	}
	@Override
	public Stockshops findByShopId(int id) {
		System.out.println(" in stockshops find by id method "+id); 
		Stockshops shop = shopRepo.findById(id);
		System.out.println(" stockshops found by id is :  "+shop); 
		return shop;
	}

	@Override
	public String updateProductDetails( UpdateProductDTO productDTO, int shopId, int productId) {
		System.out.println(" in update product details of stockshops service "+shopId+" "+productDTO);
		Products product = new Products();
		BeanUtils.copyProperties(productDTO,product);
		Products persistedProduct = productRepo.findByShopIdAndId(productId, shopId);
		System.out.println("  persisted Product  "+persistedProduct);
		System.out.println(" status dto  "+productDTO.getProductStatus());
		if(productDTO.getProductStatus().equalsIgnoreCase("Yes"))
			persistedProduct.setProductStatus(false);
		else
			persistedProduct.setProductStatus(true);
		System.out.println(" persisted status "+persistedProduct.isProductStatus());
		String message = "Product "+persistedProduct.getName()+" details updated";
		if(persistedProduct != null) {
			persistedProduct.setName(product.getName());
			persistedProduct.setRent(product.getRent());
			persistedProduct.setDescription(product.getDescription());			
			productRepo.save(persistedProduct);
		}
		else {
			message = "Failed to update product details ";
		}
		return message;
	}

	@Override
	public String deleteProductFromList(int shopId, int productId) {
		String message;
		System.out.println(" in del product from list method of service  "+shopId);
		Products product = 	productRepo.findByShopIdAndId(productId, shopId);
		if(product != null) {
			productRepo.delete(product);
		 message = "Product "+product.getName()+" Deleted";
		}
		else
			message = "Product deletion failed";
		return message;
	}
	
	@Override
	public String acceptIncomingOrder( int id) {
		System.out.println(" in accept incoming order ");
		Order order = orderRepo.findById(id).get();
		String message = "order of "+order.getId()+" accepted ";
		if(order != null) {
		System.out.println(" order is:  "+order);
		order.setStatus(OrderStatus.ACCEPTED);
		System.out.println(" order status changed to  "+order.getStatus());
		return message="order status changed";
		}
		else
			return message = "changing order status failed";
	}
	
	@Override
	public String declineIncomingOrder( int id) {
		System.out.println(" in decline incoming order ");
		Order order = orderRepo.findById(id).get();
		String message = "order of "+order.getId()+" declined ";
		if(order != null) {
		System.out.println(" order is:  "+order);
		order.setStatus(OrderStatus.CANCELLED);
		System.out.println(" order status changed to  "+order.getStatus());
		}
		else
			message = "changing order status failed";
		return message;
	}

	@Override
	public String addAddress(int id, String newAddress) {
		String message = "Address accepted";
		System.out.println(" add address of user in service method  "+id+"  "+newAddress);
		Address address =addRepo.findByUserId(id);
		if(newAddress != null && address != null)
			address.setUserAddress(newAddress);
		else
			message = "Invalid Address";
		return message;
	}
	@Override
	public Stockshops authenticateShop(String email, String password) {
		System.out.println(" user credentials  "+shopRepo.findByEmailAndPassword(email, password));
		return shopRepo.findByEmailAndPassword(email, password);
	}
	@Override
	public List<Stockshops> shopList() {
		return shopRepo.findAll();
	}
	@Override
	public List<Stockshops> getAllStockshops() {		
		return shopRepo.findAll();
	}
	@Override
	public int shopcount() {
		return (int) shopRepo.count();
	}

	

}
