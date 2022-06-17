const hoursInput = document.getElementById("hour");
const minutesInput = document.getElementById("minutes");
const addBtn = document.getElementById("add-btn");
const refreshBtn = document.getElementById("refresh-btn");
const result = document.getElementById("result-display");

let hours = 0;
let minutes = 0;
const inputsArr = [];

hoursInput.addEventListener("keyup", (e) => {
	hours = +e.target.value;
});

minutesInput.addEventListener("keyup", (e) => {
	minutes = +e.target.value;
});

addBtn.addEventListener("click", (e) => {
	e.preventDefault();
	inputsArr.push({
		hours,
		minutes,
	});
	sumTotal(inputsArr);
});

const sumHours = (inputs) =>
	inputs.map((input) => input.hours).reduce((p, c) => p + c, 0);

const sumMinutes = (inputs) =>
	inputs.map((input) => input.minutes).reduce((p, c) => p + c, 0);

const sumTotal = (inputs) => {
	let totalHours = sumHours(inputs);
	let totalMinutes = sumMinutes(inputs);

	if (totalMinutes > 59) {
		let lastIndex = inputsArr.length - 1;

		inputsArr[lastIndex].hours++;
		totalHours = sumHours(inputs);

		inputsArr[lastIndex].minutes -= 60;
		totalMinutes = sumMinutes(inputs);
	}

	result.innerText = `${totalHours}h, ${totalMinutes}m`;
};

refreshBtn.addEventListener("click", (e) => {
	e.preventDefault();
	location.reload();
});
