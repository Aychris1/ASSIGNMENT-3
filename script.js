class restaurantManager{
	restaurantList = [{
			 id: 1,
			 restaurantName: 'KFC',
			 address: 'Anand vihar',
			 city: 'Dehlhi'
},
			{
				id: 2,
				restaurantName: 'Domino',
			 address: 'Anand vihar',
			 city: 'Dehlhi'
				},
			{
				id: 3,
				restaurantName: 'Burger King',
			 address: 'Anand vihar',
			 city: 'Pune'
				},
			{
				restaurantName: 'KFC',
			 address: 'Anand vihar',
			 city: 'Mumbai'
				},
			{
				id: 5,
				restaurantName: 'Zomato',
			 address: 'Anand vihar',
			 city: 'Dubai'
	}];

	printAllRestaurantNames = () => {
		return this.restaurantList.map(restaurant => restaurant.restaurantName);
	}

filterResturantsByCity = (cityname) => {
 return this.restaurantList.filter(restaurant => restaurant.city == cityname)
}
}

const restaurantObject = new restaurantManager();

const output1 = restaurantObject.printAllRestaurantNames();
console.log(output1)

console.log(restaurantObject.filterResturantsByCity("Dubai"));
//question 2


orderData = {
			 'Below 500': 20,
			 '500-1000': 29,
			  '1000-1500': 30,
				'1500-2000': 44,
				'Above 2000': 76
				};

//a

const total = Object.values(orderData).reduce((prev, next) => prev + next );
console.log(total);

//b

const headers = Object.keys(orderData);
console.log(headers);

//c
let arr = [];
const response = headers.map((item, index) => {
	const obj = {
		'id': index + 1,
		'order': item,
		'orderpercentage': ((orderData[item]/total)*100).toFixed(2),
		'restaurant': 'punjabi Tadka'
	}
	arr.push(obj);
})
console.log(arr);