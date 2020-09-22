function changeMode(size, weight, transform, background, color) {
	return () => {
		let body = document.body;
		body.style.fontSize = (size + "px");
		body.style.weight = weight;
		body.style.textTransform = transform;
		body.style.background = background;
		body.style.color = color;
	}
}

function main() {
	let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
	let darkmode = changeMode(12, "bold", "capitalize", "black", "white");
	let screamMode = changeMode(12, "normal", "lowercase", "white", "black");
	
	let p = document.createElement("p");
	p.innerText = "Welcome Holberton!";
	document.body.appendChild(p);

	let spooky_btn = document.createElement("button");
	spooky_btn.setAttribute("id", "spooky_btn");
	spooky_btn.innerText = "Spooky";
	document.body.appendChild(spooky_btn);
	document.getElementById("spooky_btn").onclick = spooky;

	let dark_btn = document.createElement("button");
	dark_btn.setAttribute("id", "dark_btn");
	dark_btn.innerText = "Dark mode";
	document.body.appendChild(dark_btn);
	document.getElementById("dark_btn").onclick = darkmode;

	let scream_btn = document.createElement("button");
	scream_btn.setAttribute("id", "scream_btn");
	scream_btn.innerText = "Scream mode";
	document.body.appendChild(scream_btn);
	document.getElementById("scream_btn").onclick = screamMode;
}
main();
