package com.app.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dtos.ProductCart;
import com.app.dtos.ProductList;
import com.app.dtos.LoginRequest;
import com.app.dtos.StockshopssList;
import com.app.dtos.UserDTO;
import com.app.pojos.Products;
import com.app.pojos.Payment;
import com.app.pojos.Stockshops;
import com.app.pojos.User;
import com.app.service.ICartService;
import com.app.service.IProductService;
import com.app.service.IPaymentService;
import com.app.service.IStockshopsService;
import com.app.service.IUserService;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins ="http://localhost:3000")
public class UserController {
	
	
	@Autowired
	private IUserService userService;
	
	@Autowired
	private IStockshopsService shopService;
	
	@Autowired
	private ICartService cartService;
	
	@Autowired
	private IProductService productService;
	
	@Autowired
	private IPaymentService payService;
	
	
	//------------------------------constructor-------------------------//
	
	public UserController() {
		System.out.println("in ctr of "+getClass().getName());
	}
	@PostMapping("/register")
	public ResponseEntity<?> createNewUser(@RequestBody User newUser){
		System.out.println("in create new user"+ newUser);
		return new ResponseEntity<>(userService.createNewUser(newUser),HttpStatus.CREATED);
	}
	
	@GetMapping("/logout")
	public ResponseEntity<?> userLogout(HttpSession session, Model map, HttpServletRequest request, HttpServletResponse resp ) {
		System.out.println("in UserLogout");
		map.addAttribute("details", session.getAttribute("user_details"));
		session.invalidate();
		resp.setHeader("refresh", "3;url="+request.getContextPath());
		return new ResponseEntity<>(HttpStatus.OK);		
	}
	

	@PostMapping("/login")
  public ResponseEntity<?> authenticateUser (@RequestBody LoginRequest request)
  { 
	User user = userService.authenticateUser(request.getEmail(),request.getPassword());
	
	if(user!=null) {
		System.out.println("user logged in is "+user); 
		return new ResponseEntity<>(user, HttpStatus.OK);
	}else {
		Stockshops shop = shopService.authenticateShop(request.getEmail(),request.getPassword()); 
	System.out.println("shop logged in is "+shop); 
	return new ResponseEntity<>(shop, HttpStatus.OK);
	}
  }
	
	@GetMapping("/search/stockshops/{name}")
  public ResponseEntity<?> findByStockshopsName(@PathVariable String name){
	  System.out.println("in find by name"+ name);
	  List<Stockshops> shopList=shopService.findByName(name);
	  if(shopList.size()==0) {
		  return new ResponseEntity<>(new StockshopssList(shopList), HttpStatus.NO_CONTENT);
	  }
	return ResponseEntity.ok(new StockshopssList(shopList));
  }
	@GetMapping("/search/products/{name}")
	  public ResponseEntity<?> findProductByName(@PathVariable String name){
		  System.out.println("in find product  by name"+ name);
		  List<Products> productList=userService.findByName(name);
		  if(productList.size()==0) {
			  return new ResponseEntity<>(new ProductList(productList), HttpStatus.NO_CONTENT);
		  }
		return ResponseEntity.ok(new ProductList(productList));
	  }
	@GetMapping("/search/products_category")
	  public ResponseEntity<?> findProductByCategory(@RequestParam(name="Category") String category){
		  System.out.println("in find product  by name"+ category);
		  List<Products> productList=productService.findByCategory(category);
		  if(productList.size()==0) {
			  return new ResponseEntity<>(new ProductList(productList), HttpStatus.NO_CONTENT);
		  }
		return ResponseEntity.ok(new ProductList(productList));
	  }

	  @PutMapping("/{userId}")
	  public ResponseEntity<?> updateUserDetails(@PathVariable int userId, @RequestBody UserDTO userDTO){
		  System.out.println("in update details: "+userId+" "+userDTO);
		  return new ResponseEntity<>(userService.updateUserDetails(userId, userDTO),HttpStatus.OK);
	  }  
 @GetMapping("/cart/{userId}")
	  public ResponseEntity<?> getProductCart(){
		  return ResponseEntity.ok(cartService.getProductInCart());
	  }
	  @GetMapping("/Cart/addProduct/{productId}")
	    public List<ProductCart> addProductToCart(@PathVariable("productId") int productId ) {
		  System.out.println("in user contoleer add product method");
		  System.out.println(productService.findById(productId).get());
	      cartService.addProduct(productId);
	        return cartService.getProductInCart();
	    }
	  @GetMapping("/shoppingCart/removeProduct/{productId}")
	    public ResponseEntity<?> removeProductFromCart(@PathVariable("productId") int productId) {
	        cartService.removeProduct(productId);
	        return ResponseEntity.ok(cartService.getProductInCart());
	    }
		
		@PostMapping("/{userId}")
		public ResponseEntity<?> addAddressOfUser(@PathVariable int userId, @RequestParam(name = "add") String address) {
			System.out.println(" in add address of user method of controller  "+userId+"  "+address);
			userService.addAddress(userId, address);
			return new ResponseEntity<>(userService.addAddress(userId, address), HttpStatus.ACCEPTED);
			
		}
        @PostMapping("/add_payment/{userId}/{orderId}")
	  public ResponseEntity<?> addPayment(@PathVariable("userId") int userId,@PathVariable("orderId") int orderId, @RequestBody Payment pay){
		  payService.addPayment(userId, orderId,pay);
		  return new ResponseEntity<>(payService.addPayment(userId, orderId,pay),HttpStatus.CREATED); 
	  }

}
