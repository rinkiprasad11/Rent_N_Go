package com.app.service;

import java.util.List;

import com.app.pojos.Category;

public interface ICategoryService {
	
	Category addNewCategory(Category category);
	Category findByCatName(String catName);
	List<Category> categoryList();
	
	String deleteCategory(int cat_id);

}
