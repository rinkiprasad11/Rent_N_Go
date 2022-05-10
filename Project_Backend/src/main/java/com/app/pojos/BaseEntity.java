package com.app.pojos;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public class BaseEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	//------------------------------constructor-------------------------//
	
	public BaseEntity() {
		System.out.println("  inside ctor of base entity  ");
	}
	
	
	//------------------------------Getter And Setter-------------------------//

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	
}
