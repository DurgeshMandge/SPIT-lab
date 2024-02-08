package ShoppingStore;

public class Cart {
	
//	Product Name, Product Id , Product purchase date ,Product Category
	String prodName;
	int id;
	String purchaseDate;
	String category;
	int value;
	static int totalPurchaseProduct = 0;
	static int totalPurchaseValue = 0;

	public Cart(String name, int id, String date, String cat, int val) {
		this.prodName = name;
		this.id=id;
		this.purchaseDate=date;
		this.category=cat;
		this.value=val;
		Cart.totalPurchaseProduct++;
		Cart.totalPurchaseValue+= value;
	}
	
	public static void main(String[] args) {
		Cart obj1 = new Cart("c1",1,"02-01-2024","Food",100);
		Cart obj2 = new Cart("c1",2,"02-22-2024","Cloth",200);
		Cart obj3 = new Cart("c1",13,"02-31-2024","Accessory",300);
		Cart obj4 = new Cart("c1",14,"02-17-2024","Kithen",400);
		Cart obj5 = new Cart("c1",21,"02-19-2024","Electric",500);
		System.out.println(Cart.totalPurchaseProduct);
		System.out.println(Cart.totalPurchaseValue);	
	}

}
