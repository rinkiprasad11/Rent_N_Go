package com.app.controller;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dtos.AddProductDTO;
import com.app.dtos.ShopDTO;
import com.app.dtos.UpdateProductDTO;
import com.app.pojos.Category;
import com.app.pojos.Products;
import com.app.pojos.Stockshops;
import com.app.service.ICategoryService;
import com.app.service.IProductService;
import com.app.service.IOrderService;
import com.app.service.IStockshopsService;

@CrossOrigin(origins ="http://localhost:3000")
@RestController
@RequestMapping("/stockshops")
public class StockshopsController {
	
	@Autowired
	private IStockshopsService shopService;
	
	@Autowired
	private ICategoryService catService;
	
	@Autowired
	private IOrderService orderService;
	
	@Autowired
	private IProductService productService;
	
	//------------------------------constructor-------------------------//

	public StockshopsController() {
		System.out.println("in ctr of " + getClass().getName());
	}

	@PutMapping("/{shopId}")
	public ResponseEntity<?> updateUserDetails(@PathVariable int shopId, @RequestBody ShopDTO shopDTO) {
		System.out.println("in update details: " + shopId + " " + shopDTO);
		return new ResponseEntity<>(shopService.updateVendorDetails(shopId, shopDTO), HttpStatus.OK);
	}
	
	

	@PostMapping("/{shop_id}")
	public ResponseEntity<?> addNewProduct(@RequestBody AddProductDTO newProduct, @PathVariable("shop_id") int shopId) {
		System.out.println(" in add new product controller method " + newProduct);
		Products product = new Products();
		BeanUtils.copyProperties(newProduct, product);
		System.out.println(" product after copying " + product);
		Stockshops shop = shopService.findByShopId(shopId);
		System.out.println(" category in dto is " + newProduct.getCategory());
		Category category = catService.findByCatName(newProduct.getCategory());
		return new ResponseEntity<>(shopService.addProducts(product, shop, category), HttpStatus.ACCEPTED);
	}
	
	

	@PutMapping("/{shop_id}/products/{product_id}")
	public ResponseEntity<?> updateProductDetails (@PathVariable("shop_id") int shopId, @PathVariable("shop_id") int productId ,@RequestBody UpdateProductDTO productDto) {
		System.out.println(" in update product details method of controller  "+shopId+" "+productDto);
		return new ResponseEntity<>(shopService.updateProductDetails(productDto, shopId, productId), HttpStatus.ACCEPTED);
	}

	@GetMapping("/orderDetails/{shopId}")
	public ResponseEntity<?> getAllOrdersToVendor(@PathVariable Stockshops shopId) {
		System.out.println("in order details to vendor: " + shopId);
		return new ResponseEntity<>(orderService.getAllOrdersToVendor(shopId), HttpStatus.OK);
	}

	@DeleteMapping("/{shop_id}/products/{product_id}")
	public ResponseEntity<?> deleteProductFromList(@PathVariable("shop_id") int shopId,
			@PathVariable("product_id") int productId) {
		System.out.println(" in controller of delete product from list " + shopId + " " + productId);
		return new ResponseEntity<>(shopService.deleteProductFromList(shopId, productId), HttpStatus.OK);
	}

	@PutMapping("/{order_id}/accept")
	public ResponseEntity<?> acceptOrder(@PathVariable int orderId) {
		System.out.println(" in accept order method of controller  ");
		return new ResponseEntity<>(shopService.acceptIncomingOrder(orderId), HttpStatus.ACCEPTED);
	}

	@PutMapping("/{order_id}/decline")
	public ResponseEntity<?> declineOrder(@PathVariable int orderId) {
		System.out.println(" in accept order method of controller  ");
		return new ResponseEntity<>(shopService.declineIncomingOrder(orderId), HttpStatus.OK);
	}

	@GetMapping("/{shop_id}")
	public ResponseEntity<?> getAllProduct(@PathVariable("shop_id") Stockshops shopId) {
		System.out.println(" in product details method of controller  "+shopId);
		return new ResponseEntity<>(productService.getAllProduct(shopId), HttpStatus.ACCEPTED);
	}
}
