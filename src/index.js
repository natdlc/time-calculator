const hour = document.getElementById("hour");
const minutes = document.getElementById("minutes");
const addBtn = document.getElementById("add-btn");
const refreshBtn = document.getElementById("refresh-btn");
const result = document.getElementById("result-display");

let hoursInput = 0;
let minutesInput = 0;
const inputsArr = [];

hour.addEventListener("keyup", (e) => {
	hoursInput = +e.target.value;
});

minutes.addEventListener("keyup", (e) => {
	minutesInput = +e.target.value;
});


addBtn.addEventListener("click", (e) => {
	e.preventDefault();
	inputsArr.push({
		hours: hoursInput,
		minutes: minutesInput,
	});
	calculateTotal(inputsArr);
});

const calculateTotal = (inputs) => {
	let totalHours = inputs
		.map((input) => input.hours)
		.reduce((p, c) => p + c, 0);

	let totalMinutes = inputs
		.map((input) => input.minutes)
		.reduce((p, c) => p + c, 0);

	if (totalMinutes > 59) {
		totalHours++;
		totalMinutes = totalMinutes - 60;
	}

	result.innerText = `${totalHours}h, ${totalMinutes}m`;
};

refreshBtn.addEventListener("click", (e) => {
	e.preventDefault();
	location.reload();
});
