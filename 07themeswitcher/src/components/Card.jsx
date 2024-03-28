import React from "react";

function Card() {
	const img_url =
		"https://i.pinimg.com/280x280_RS/8d/37/c7/8d37c71a34842a615d9e7d5d88a25738.jpg";
	return (
		<div className="w-[80%] mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
			<img className="p-8 rounded-t-lg mx-auto" src={img_url} alt="me" />
			<div className="px-5 pb-5">
				<h3 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
					Swagatam Roy
				</h3>
				<p className="text-xl my-2 font-semibold tracking-tight text-gray-900 dark:text-white">
					Web-dev and Networking Enthusiast
				</p>
			</div>
			<div className="flex justify-around items-baseline my-2">
				<div className="text-white bg-sky-500 dark:bg-pink-600 px-2 py-1 font-semibold shadow text-xl rounded-lg">
					Coding is ❤
				</div>
				<button
					className="text-white bg-blue-700 hover:bg-blue-800 my-2"
					onClick={(e) => {
						window.open("https://github.com/theonlysroy");
					}}
				>
					Github 🔗
				</button>
			</div>
		</div>
	);
}

export default Card;
