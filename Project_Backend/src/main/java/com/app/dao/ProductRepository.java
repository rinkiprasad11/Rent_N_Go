package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.RequestParam;

import com.app.pojos.Products;
import com.app.pojos.Stockshops;

public interface ProductRepository extends JpaRepository<Products, Integer> {
	@Query("select p from Products p where p.name LIKE %?1%")
	List<Products> findByName(@RequestParam("name") String name);

	@Query("select p from Products p where p.id = :productId and p.shopId.id = :shopId ")
	Products findByShopIdAndId(@Param("productId") int productId, @Param("shopId") int shopId);

	@Query("select p from Products p where p.Category in (select c.id from Category c where c.catName Like ?1%)")
	List<Products> findByCategory(@RequestParam("name") String category);

	Optional<Products> findById(int id);

	@Query("select p from Products p where p.shopId = :shopid")
	List<Products> findByShopId(@Param("shopid") Stockshops shopid);

}
