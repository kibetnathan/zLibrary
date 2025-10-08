// set up const userForm formCard  content
const userForm = document.getElementById('myForm');
const formCard = document.getElementById('formCard');
const content = document.getElementById('content');
const motivation = document.getElementById('motivation');
const userString = document.getElementById('contentType');

function onSubmit(event) {
    event.preventDefault;

    var fullName = document.getElementById('fname').value + " " + document.getElementById('lname').value;
    var username = document.getElementById('username');
    var DoB = document.getElementById('DoB').value;

    const userData = { fullName, username, DoB };
    localStorage.setItem('userData', JSON.stringify(userData));
}

function getAge(dob) {
    const birthDate = new Date(dob);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    return age;
}

userForm.addEventListener('submit', onSubmit);

const savedData = JSON.parse(localStorage.getItem('userData'));
if (savedData != null){
    userForm.classList.add('hidden');
    content.classList.remove('hidden');
    content.classList.add('flex');
    const age = getAge(savedData.DoB)

    userString.textContent = `Hello ${savedData.fullName}, you are ${age} years old.`
}

const quotes = [
  "Believe in yourself!",
  "Stay consistent — progress will come.",
  "Failure is just a step to success.",
  "You got this 💪",
  "Small steps every day lead to big results."
];

let index = 0;

motivation.textContent = quotes[0];

setInterval(() => {
    index = (index + 1) % quotes.length;
    motivation.textContent = quotes[index];
}, 7000);

resetBtn.addEventListener('click', () => {
  localStorage.removeItem('userData');
  alert('Data has been cleared!');

  location.reload();
});