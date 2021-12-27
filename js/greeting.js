const loginForm = document.querySelector('#login_form');
const loginInput = loginForm.querySelector('input');

const greeting = document.querySelector('h1');
const QUOTE = document.querySelector('.quote');
const todo_form = document.querySelector('.todo_form');
const CLOCK = document.querySelector('h2');
const weathers = document.querySelector('.weather');

const HIDE_CLASSNAME = 'hide';
const USERNAME_KEY = 'username';

// 2
function onLoginSubmit(e) {
  e.preventDefault();
  loginForm.classList.add(HIDE_CLASSNAME);

  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);

  paintGreetings(username);
}

// 2-1
function paintGreetings(username) {
  greeting.classList.remove(HIDE_CLASSNAME);
  QUOTE.classList.remove(HIDE_CLASSNAME);
  todo_form.classList.remove(HIDE_CLASSNAME);
  CLOCK.classList.remove(HIDE_CLASSNAME);
  weathers.classList.remove(HIDE_CLASSNAME);

  greeting.innerText = `Welcome, ${username} ❤`;
}

// 1
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDE_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  // show the greetings
  paintGreetings(savedUsername);
}
