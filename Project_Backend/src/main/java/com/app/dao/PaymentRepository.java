package com.app.dao;

import java.time.LocalDateTime;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.app.pojos.Payment;


public interface PaymentRepository extends JpaRepository<Payment, Integer> {
	@Modifying
	@Query(value = "insert into payments(pay_method,pay_time,shop_id,user_id, amount) values('WALLET',:payDate,:shopId,:userId,:amount)", nativeQuery = true)
	int insertPayment(int shopId, int userId, LocalDateTime payDate, double amount);

	@Query(value = "select id from payments where pay_time=:payDate2 and user_id=:userId and shop_id=:shopId", nativeQuery = true)
	int fetchPaymentId(int shopId, int userId, LocalDateTime payDate2);

	@Query(value = "select sum(amount) from payments", nativeQuery = true)
	double totalsales();
}
