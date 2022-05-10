package com.app.dtos;

import java.util.List;

import com.app.pojos.Stockshops;

public class StockshopssList {
private List<Stockshops> shopList;

//------------------------------constructor-------------------------//

public StockshopssList() {
	
}

public StockshopssList(List<Stockshops> shopList) {
	super();
	this.shopList = shopList;
}

//------------------------------Getter And Setter-------------------------//

public List<Stockshops> getShopList() {
	return shopList;
}

public void setShopList(List<Stockshops> shopList) {
	this.shopList = shopList;
}

//------------------------------ToString Method-------------------------//

@Override
public String toString() {
	return "StockshopssList [shopList=" + shopList + "]";
}

}
