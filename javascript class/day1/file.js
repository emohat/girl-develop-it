//variables can be numbers or words!
function calculate() {
var income = 4000;
var days = 30;
var month = income / days;
month = month.toFixed(2);
var week = income / 4;
week = week.toFixed(2);
//alerts will present as pop-ups
alert("You have $" + month + " dollars per day to spend and $"  + week + " per week.");
//The following are if/else statements that will display in the console log
if (month >= 500) {
	console.log("Wowwee!  That is a lot!");
} else {
	console.log("You'll be broke!  You better ask Captain von Trapp for a raise...");
}
}

//now we are working on loops and arrays
function favoriteThings() {
	var favorites = ['Raindrops on roses and', 'whiskers on kittens.', 'Bright copper kettles and', 'warm woollen mittens.',
'Brown paper packages tied up with strings...', 'These are a few of my favorite things!'];
for (var i = 0; i < favorites.length; i++) {
	console.log(favorites[i]);
}
}

//now we are working on objects
function myFriends() {
	var Maria = {
		name: "Maria",
		likes: ["singing", "sewing", "pestering the Captain"],
		haircolor: "blonde"
		};
	var Captain = {
		name: "Captain Georg Von Trapp",
		likes: ["money", "order", "whistles"],
		haircolor: "brown"
		};
	var Gretl = {
		name: "Gretl Von Trapp",
		likes: ["singing", "candy", "naps"],
		haircolor: "brown"
		};

	var friends = [Maria, Captain, Gretl]

for (var i = 0; i < friends.length; i++) {
	console.log(friends[i].name + " has " + friends[i].haircolor + " hair and likes " + friends[i].likes + ".");
	alert(friends[i].name + " has " + friends[i].haircolor + " hair and likes " + friends[i].likes + ".")
}
}

