import VanillaTilt from 'vanilla-tilt';
import { login } from './app/functions/login';
import './style/style.scss';

const url = 'http://127.0.0.1:5000';

async function main(){

    const users = await getUsers();

    console.log(users)

    const img = await getUserImage(2);

    const body = document.querySelector('body');

    body.innerHTML += `

       <img src="${img}" alt=""> 

    `

}

new VanillaTilt.init(document.querySelector('#login'), {
    max: 4,
    speed: 2000,
});

const $title = document.querySelector('h2')
// const $inputUsername = document.querySelector('#username-input');
// const $inputPassword = document.querySelector('#password-input');
const $form = document.querySelector('form');

$form.addEventListener('submit', async (ev) => {

    ev.preventDefault();
    const formData = new FormData($form);
    
    const log = await login(url, formData);

    if(log.logState === 'true'){
        $title.textContent = 'Logged';
    }else{
        $title.textContent = log.logState;
    }
    

    // $title.textContent = logState;

    // debugger
});

// main();
