package com.app.dao;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Order;
import com.app.pojos.Stockshops;
import com.app.pojos.User;

public interface OrderRepository extends JpaRepository<Order, Integer> {
	List<Order> findByStockshopsId(Stockshops shopId);
	
	List<Order> findByUserId(User userId);

	@Query("select o from Order o where o.userId = :shopId and o.status = 'PLACED' or o.status ='CANCELLED'")
	List<Order> getAllOrderToShopVendor(@Param("shopId") Stockshops shopId);
	
	@Query("select o from Order o where o.userId = :userid and o.id = :orderId and o.status = 'PLACED' or o.status ='DELIVERED'") 
	List<Order> getAllOrderToDelBoy(@Param("userid") User userid);
	
	@Modifying
	@Query(value="insert into orders (status,total_bill,user_id,shop_id,pay_id,order_Date) values ('PLACED',:totalBill,:userId,:shopId,:payId, :orderTime)", nativeQuery = true)
	int insertOrder(double totalBill,int userId, int shopId,int payId ,LocalDateTime orderTime);
}
