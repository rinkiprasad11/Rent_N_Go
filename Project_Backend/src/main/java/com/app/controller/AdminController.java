package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Category;
import com.app.pojos.Stockshops;
import com.app.pojos.User;
import com.app.service.ICategoryService;
import com.app.service.IOrderService;
import com.app.service.IPaymentService;
import com.app.service.IStockshopsService;
import com.app.service.IUserService;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {
	
	@Autowired
	private IStockshopsService shopService;
	
	@Autowired
	private IUserService userService;
	
	@Autowired
	private ICategoryService catService;
	
	@Autowired
	private IOrderService orderService;
	
	@Autowired
	private IPaymentService payService;
	
	

	@PostMapping("/shopRegister")
	public ResponseEntity<?> addNewStockshops(@RequestBody Stockshops newShop) {
		System.out.println(" in add new shop" + newShop);
		return new ResponseEntity<>(shopService.addNewStockshops(newShop), HttpStatus.CREATED);
	}
	
	

	@DeleteMapping("/stockshops/{shopId}")
	public ResponseEntity<?> deleteStockshops(@PathVariable int shopId) {
		System.out.println("in delete shopId" + shopId);
		return ResponseEntity.ok(shopService.deleteStockshops(shopId));
	}
	

	@PostMapping("/deliveryBoyRegister")
	public ResponseEntity<?> addNewDeliveryBoy(@RequestBody User newdeliveryBoy) {
		System.out.println("in add new deliveryBoy" + newdeliveryBoy);
		return new ResponseEntity<>(userService.addNewDeliveryBoy(newdeliveryBoy), HttpStatus.CREATED);
	}
	

	@DeleteMapping("/deleteuser/{userId}")
	public ResponseEntity<?> deleteDeliveryBoy(@PathVariable("userId") int userId) {
		System.out.println("in delete shopId " + userId);
		return ResponseEntity.ok(userService.deleteDeliveryBoy(userId));
	}
	

	@PostMapping("/category")
	public ResponseEntity<?> addNewCategory(@RequestBody Category category) {
		System.out.println(" in add new category method of controller " + category);
		return new ResponseEntity<>(catService.addNewCategory(category), HttpStatus.CREATED);
	}
	

	@GetMapping("/categoryList")
	public ResponseEntity<?> CategoryList() {
		System.out.println(" in add new category method of controller ");
		return new ResponseEntity<>(catService.categoryList(), HttpStatus.CREATED);
	}
	
	

	@GetMapping("/orderDetails")
	public ResponseEntity<?> getAllOrders() {
		System.out.println("in get all user order details");
		return new ResponseEntity<>(orderService.getAllOrders(), HttpStatus.OK);
	}
	

	@GetMapping("/userList")
	public ResponseEntity<?> findAllUser() {
		System.out.println("in find all method cntr");
		return new ResponseEntity<>(userService.userList(), HttpStatus.OK);
	}
	

	@GetMapping("/shopList")
	public ResponseEntity<?> findAllStockshops() {
		System.out.println("in find all method cntr");
		return new ResponseEntity<>(shopService.shopList(), HttpStatus.OK);
	}
	

	@GetMapping("/userCount")
	public ResponseEntity<?> finduserCount() {
		System.out.println("in find all method cntr");
		return new ResponseEntity<>(userService.usercount(), HttpStatus.OK);
	}
	

	@GetMapping("/orderCount")
	public ResponseEntity<?> findorderCount() {
		System.out.println("in find all method cntr");
		return new ResponseEntity<>(orderService.ordercount(), HttpStatus.OK);
	}
	

	@GetMapping("/shopCount")
	public ResponseEntity<?> findshopCount() {
		System.out.println("in find all method cntr");
		return new ResponseEntity<>(shopService.shopcount(), HttpStatus.OK);
	}
	

	@GetMapping("/totalsales")
	public ResponseEntity<?> findtotalsales() {
		return new ResponseEntity<>(payService.totalsales(), HttpStatus.OK);
	}

}
