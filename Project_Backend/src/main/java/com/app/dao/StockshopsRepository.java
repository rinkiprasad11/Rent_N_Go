package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.RequestParam;

import com.app.pojos.Stockshops;

public interface StockshopsRepository extends JpaRepository<Stockshops, Integer> {
	@Query("select s from Stockshops s where s.name LIKE %?1%")
	List<Stockshops> findByName(@RequestParam("name") String name);

	List<Stockshops> findByPincode(String pincode);

	Stockshops findById(int id);

	Stockshops findByEmailAndPassword(String email, String password);
}
