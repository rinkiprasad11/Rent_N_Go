package com.app.service;

import java.time.LocalDateTime;
import java.util.List;

import com.app.pojos.Order;
import com.app.pojos.Stockshops;
import com.app.pojos.User;

public interface IOrderService {
	
	List<Order> getAllOrders();
	
	List<Order> getAllOrdersToVendor(Stockshops shopId);
	
	List<Order> getAllOrdersToUser(User shopId);
	
	List<Order> getAllOrdersToDeliveryBoy(User deliveryBoyId);
	
	int insertOrder(double totalBill, int userId, int shopId,int payId, LocalDateTime orderTime);
	
	int ordercount();
	
	
}
