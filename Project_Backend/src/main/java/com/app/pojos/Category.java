package com.app.pojos;

import javax.persistence.*;

@Entity
@Table(name = "categories")
public class Category extends BaseEntity{
	
	@Column(name = "cat_name",length=20, unique = true)
	private String catName;
	
	public Category() {
		System.out.println("in constructor of: "+getClass().getName());
	}
	
	//------------------------------constructor-------------------------//

	public Category(String catName) {
		super();
		this.catName = catName;
	}
	
	//------------------------------Getter And Setter -------------------------//

	public String getCatName() {
		return catName;
	}

	public void setCatName(String catName) {
		this.catName = catName;
	}

	
	//---------------------------------ToString Method-------------------------//
	
	@Override
	public String toString() {
		return "Category [catName=" + catName + ", Id=" + getId() + "]";
	}

	
}
