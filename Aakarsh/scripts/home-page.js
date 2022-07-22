//----------------------------------------------------------- First Page-----------------------------------------------------------------------
let url_First = `https://newsapi.org/v2/top-headlines?country=in&apiKey=3040f5b972084c11b5135e4e11bb78ab`;

let fetchData_first = async () => {
	let res_first = await fetch(url_First);
	let data_first = await res_first.json();
	// console.log("data_first: ", data_first);
	append_first_div_data(data_first.articles);
};
fetchData_first();

let append_first_div_data = (data_first) => {
	let first_div_container = document.getElementById('home-first');

	data_first.forEach((el) => {
		let title = document.createElement('h5');
		title.innerText = el.title;

		let publish = document.createElement('p');
		publish.innerText = ` Updated on ${el.publishedAt}`;

		let first_data_div = document.createElement('div');
		first_data_div.setAttribute('class', 'first_data_div');

		first_data_div.append(title, publish);
		first_div_container.append(first_data_div);
	});
};

// ---------------------------------------------------------------Mid Page------------------------------------------------------------------------

let url =
	'https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=3040f5b972084c11b5135e4e11bb78ab';
let fetchData = async () => {
	let res = await fetch(url);
	let data = await res.json();
	// console.log(data)
	displayData(data.articles);
};
fetchData();

let displayData = (data) => {
	let container = document.getElementById('home-mid');

	data.forEach((el) => {
		let box = document.createElement('div');
		box.setAttribute('class', 'data-boxes');

		let head = document.createElement('h3');
		head.innerText = 'INDIA NEWS';

		let title = document.createElement('h5');
		title.innerText = el.title;

		let image = document.createElement('img');
		image.src = el.urlToImage;
		image.setAttribute('class', 'data-img');

		let publish = document.createElement('p');
		publish.innerText = ` Updated on ${el.publishedAt}`;

		box.append(head, title, image, publish);
		container.append(box);
	});
};

let url1 = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=3040f5b972084c11b5135e4e11bb78ab`;
let fetchData1 = async () => {
	let res1 = await fetch(url1);
	let data1 = await res1.json();
	// console.log(data1)
	displayData1(data1.articles);
};
fetchData1();

let displayData1 = (data) => {
	let container1 = document.getElementById('home-mid');

	data.forEach((el) => {
		let box1 = document.createElement('div');
		box1.setAttribute('class', 'data-boxes1');

		let head1 = document.createElement('h3');
		head1.innerText = 'Sports';

		let title1 = document.createElement('h5');
		title1.innerText = el.title;

		let image1 = document.createElement('img');
		image1.src = el.urlToImage;
		image1.setAttribute('class', 'data-img1');

		let publish1 = document.createElement('p');
		publish1.innerText = ` Updated on ${el.publishedAt}`;

		box1.append(head1, title1, image1, publish1);
		container1.append(box1);
	});
};

// ---------------------------------------------------------------Last Page------------------------------------------------------------------------

let Url_Last_Div =
	'https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=3040f5b972084c11b5135e4e11bb78ab';

let Fetch_Last_Div = async () => {
	let res = await fetch(Url_Last_Div);
	let data = await res.json();
	console.log(data);
	displayData_left(data.articles);
};

Fetch_Last_Div();

let displayData_left = (data) => {
	let last_container = document.getElementById('home-last');

	data.forEach((el) => {
		let last_div_data = document.createElement('div');
		last_div_data.setAttribute('class', 'last_div_data');

		let title2 = document.createElement('h5');
		title2.innerText = el.title;

		let publish2 = document.createElement('p');
		publish2.innerText = ` Updated on ${el.publishedAt}`;

		last_div_data.append(title2, publish2);
		last_container.append(last_div_data);
	});
};
