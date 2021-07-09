console.log("Hello Bitch")

const url = 'http://127.0.0.1:5000'

const getUsers = async () => {
 
    const response = await fetch(`${url}/getUsers`);
    const users = await response.json();
    return users;

}

const getUserImage = async (id) => {

    const response = await fetch(`${url}/getUserImage/${id}`);
    const bynaryLargeObject = await response.blob();
    const domString = await URL.createObjectURL(bynaryLargeObject);
    return domString;

}

async function main(){

    const users = await getUsers();

    console.log(users)

    const img = await getUserImage(2);

    const body = document.querySelector('body');

    body.innerHTML = `

       <img src="${img}" alt=""> 

    `

}


main();
