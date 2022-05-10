package com.app.pojos;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "products")
public class Products extends BaseEntity {
	
	@Column(length = 50)
	@NotEmpty
	private String name;
	@Column
	@NotNull
	private double rent;
	
	@Column
	@NotEmpty
	private String description;

	@OneToOne
	private Category Category;
	private int likes;

	@ManyToOne
	@JoinColumn(name = "shop_id" )
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Stockshops shopId;
	
	@Column(name = "Inactive_status", columnDefinition = "TINYINT" )
	private boolean productStatus;
	
	@ManyToOne
	@JoinColumn(name="order_id")
	private Order orderId;
	
	//------------------------------constructor-------------------------//
	
	public Products() {
		System.out.println("in ctr of " + getClass().getName());
	}

	
	public Products( String name,  double rent,  String description,
			 int likes, boolean productStatus) {
		super();
		this.name = name;
		this.rent = rent;
		this.description = description;
		this.likes = likes;
		this.productStatus = productStatus;
	}
	
	//------------------------------Getter And Setter-------------------------//


	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getRent() {
		return rent;
	}

	public void setRent(double rent) {
		this.rent = rent;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;

	}

	public int getLikes() {
		return likes;
	}

	public void setLikes(int likes) {
		this.likes = likes;
	}

	public Stockshops getShopId() {
		return shopId;
	}

	public void setShopId(Stockshops shopId) {
		this.shopId = shopId;
	}

	public Category getCategory() {
		return Category;
	}

	public void setCategory(Category category) {
		Category = category;
	}

	public boolean isProductStatus() {
		return productStatus;
	}


	public void setProductStatus(boolean productStatus) {
		this.productStatus = productStatus;
	}
	
	
	//-----------------------------ToString Method-------------------------//


	@Override
	public String toString() {
		return "{name:" + name + ", rent:" + rent  + ", id:" + getId()
				+ "}";
	}
}
