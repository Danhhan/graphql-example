async function fetchGreeting() {
	const response = await fetch("http://localhost:9000/", {
		method: "POST",
		headers: {
			"Content-type": "application/json",
		},
		body: JSON.stringify({
			query: "query { greeting }",
		}),
	});
	const body = await response.json();
	const { data } = body;
	return data.greeting;
}
fetchGreeting().then((greeting) => {
	document.getElementById("greeting").textContent = greeting;
});
