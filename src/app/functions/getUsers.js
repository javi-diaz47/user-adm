export const getUsers = async (url) => {

    const response = await fetch(url);
    const users = (await response).json();

    return users;

}