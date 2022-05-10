package com.app.service;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.PaymentRepository;
import com.app.pojos.Payment;

@Service
@Transactional
public class IPaymentServiceImpl implements IPaymentService {
	
	@Autowired
	private PaymentRepository payRepo;
	
	@Override
	public Payment addPayment(int userId, int orderId, Payment pay) {
		System.out.println("in add payment service of user id"+ pay);
		System.out.println("id:"+userId+ orderId);
		System.out.println("payid"+pay.getId());
		return payRepo.save(pay);
	}
	@Override
	public int insertPayment(int shopId, int userId, LocalDateTime payDate,double amount ) {
		return payRepo.insertPayment(shopId, userId, payDate, amount);
	}
	@Override
	public int fetchPaymentId(int shopId, int userId, LocalDateTime payDate2) {
		return payRepo.fetchPaymentId( shopId,  userId, payDate2);
	
	}
	@Override
	public double totalsales() {
		return payRepo.totalsales();
	}
}
