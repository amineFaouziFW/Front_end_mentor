let isValid = false;
const submitBtn = document.getElementById('submit');
const currentYear = new Date().getFullYear();
//inputs
const inputYear = document.getElementById('input-year');
const inputMonth = document.getElementById('input-month');
const inputDay = document.getElementById('input-day');
//outputs
const outputYear = document.getElementById('output-year');
const outputMonth = document.getElementById('output-month');
const outputDay = document.getElementById('output-day');
//error elements
const errorYear = document.getElementById('error-year');
const errorMonth = document.getElementById('error-month');
const errorDay = document.getElementById('error-day');
//error display (year)
inputYear.addEventListener("input", () => {
    if(+inputYear.value > currentYear) {
        isValid = false;
        errorYear.textContent = "Must be a valid year!";
        inputYear.style.border = "1px solid hsl(0, 100%, 67%)";
        return;
    }else {
        isValid = true;
        errorYear.textContent = "";
        inputYear.style.border = "1px solid #aaa";
    }
    if(+inputYear.value === 0) {
        isValid = false;
        errorYear.textContent = "This field is required";
        inputYear.style.border = "1px solid hsl(0, 100%, 67%)";
        return;
    }else {
        isValid = true;
        errorYear.textContent = "";
        inputYear.style.border = "1px solid #aaa";
    }
    //Only 4 digits and Only nums 
    inputYear.addEventListener('input', (e) => {
        let inputYearValue = e.target.value;
        inputYearValue = inputYearValue.replace(/\D/g, '');
        inputYearValue = inputYearValue.slice(0, 4);
        inputYear.value = inputYearValue;
    });
    
});

//error display (month)
inputMonth.addEventListener("input", () => {
    if(+inputMonth.value > 12) {
        isValid = false;
        errorMonth.textContent = "Must be a valid month!";
        inputMonth.style.border = "1px solid hsl(0, 100%, 67%)";
        return;
    }else {
        isValid = true;
        errorMonth.textContent = "";
        inputMonth.style.border = "1px solid #aaa";
    }
    if(+inputMonth.value === 0) {
        isValid = false;
        errorMonth.textContent = "This field is required";
        inputMonth.style.border = "1px solid hsl(0, 100%, 67%)";
        return;
    }else {
        isValid = true;
        errorMonth.textContent = "";
        inputDay.style.border = "1px solid #aaa";
    }
    //Only 2 digits and Only nums 
    inputMonth.addEventListener('input', (e) => {
        let inputMonthValue = e.target.value;
        inputMonthValue = inputMonthValue.replace(/\D/g, '');
        inputMonthValue = inputMonthValue.slice(0, 2);
        inputMonth.value = inputMonthValue;
    });
});
//error display (day)

inputDay.addEventListener("input", () => {
    if(+inputDay.value > 31) {
        isValid = false;
        errorDay.textContent = "Must be a valid day!";
        inputDay.style.border = "1px solid hsl(0, 100%, 67%)";
        return;
    }else {
        isValid = true;
        errorDay.textContent = "";
        inputDay.style.border = "1px solid #aaa";
    }
    if(+inputDay.value === 0) {
        isValid = false;
        errorDay.textContent = "This field is required";
        inputDay.style.border = "1px solid hsl(0, 100%, 67%)";
        return;
    }else {
        isValid = true;
        errorDay.textContent = "";
        inputDay.style.border = "1px solid #aaa";
    }
    //Only 2 digits and Only nums 
    inputDay.addEventListener('input', (event) => {
        let inputDayValue = event.target.value;
        inputDayValue = inputDayValue.replace(/\D/g, '');
        inputDayValue = inputDayValue.slice(0, 2);
        inputDay.value = inputDayValue;
    });
});

//calculate age function
function calculateAge() {
    if (isValid) {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth() + 1;
        const currentDay = new Date().getDate();

        let year = currentYear - +inputYear.value;
        let month = currentMonth - +inputMonth.value;
        let day = currentDay - +inputDay.value;

        if (day < 0) {
            const daysInPreviousMonth = new Date(currentYear, currentMonth - 1, 0).getDate();
            day += daysInPreviousMonth;
            month -= 1;
        }

        if (month < 0) {
            month += 12;
            year -= 1;
        }

        outputYear.textContent = year;
        outputMonth.textContent = month;
        outputDay.textContent = day;
    }else {
        alert("Error!!");
    }
}
//give our function to the button

submitBtn.addEventListener("click", calculateAge);

//Make the cursor focus on the next input when the first is full
//right to left
inputYear.addEventListener("focus", (e) => {
    if (e.target.value.length === 4) {
        inputMonth.focus();
    }
});
/*inputMonth.addEventListener("focus", (e) => {
    if (e.target.value.length === e.target.maxlength) {
        inputDay.focus();
    }
});
//left to right
inputDay.addEventListener("focus", (e) => {
    if (e.target.value.length === e.target.maxlength) {
        inputMonth.focus();
    }
});
inputMonth.addEventListener("focus", (e) => {
    if (e.target.value.length === e.target.maxlength) {
        inputYear.focus();
    }
});*/