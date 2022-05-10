package com.app.controller;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dtos.ProductOrderDto;
import com.app.dtos.PaymentDto;
import com.app.pojos.User;
import com.app.service.IAddressService;
import com.app.service.IOrderService;
import com.app.service.IPaymentService;
import com.app.service.IStockshopsService;

@RestController
@RequestMapping("/customer")
@CrossOrigin(origins = "http://localhost:3000")
public class CustomerController {

	@Autowired
	private IStockshopsService shopService;
	
	@Autowired
	private IAddressService addService;
	
	@Autowired
	private IOrderService orderService;
	
	@Autowired
	private IPaymentService payService;
	
	//------------------------------constructor-------------------------//

	public CustomerController() {

		System.out.println(" in ctor of " + getClass().getName());
	}
	

	@GetMapping("/{cust_id}/shop_list")
	public ResponseEntity<?> displayStockshopsLists(@PathVariable("cust_id") int id) {

		String pincode = addService.getPincode(id);
		System.out.println(" pincode  " + pincode);
		System.out.println(" in stockshops controller method of  " + pincode + " ");
		System.out.println(" stockshopss for that particular customers are  " + shopService.displayStockshopss(pincode));
		return new ResponseEntity<>(shopService.displayStockshopss(pincode), HttpStatus.FOUND);

	}

	@GetMapping("/orderDetails/{userId}")
	public ResponseEntity<?> getAllOrdersToVendor(@PathVariable User userId) {
		System.out.println("in order details to Customer: " + userId);
		return new ResponseEntity<>(orderService.getAllOrdersToUser(userId), HttpStatus.OK);
	}

	@GetMapping("/shoplist")
	public ResponseEntity<?> getAllStockshops() {
		System.out.println("in get all stockshops list");
		return new ResponseEntity<>(shopService.getAllStockshops(), HttpStatus.OK);
	}

	@PostMapping("/totalBill")
	public ResponseEntity<?> getBillDetails(@RequestBody ProductOrderDto productOrder) {
		System.out.println(productOrder);
		System.out.println(productOrder.getUserid());
		PaymentDto pay = new PaymentDto(productOrder.getShopid(), productOrder.getUserid(), LocalDateTime.now(), "WALLET",
				productOrder.getTotalRent());
		if (payService.insertPayment(productOrder.getShopid(), productOrder.getUserid(), pay.getPayDate(), pay.getAmount()) == 1) {
			int payId = payService.fetchPaymentId(productOrder.getShopid(), productOrder.getUserid(), pay.getPayDate());
			return new ResponseEntity<>(orderService.insertOrder(productOrder.getTotalRent(), productOrder.getUserid(),
					productOrder.getShopid(), payId, pay.getPayDate()), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

	}


}
