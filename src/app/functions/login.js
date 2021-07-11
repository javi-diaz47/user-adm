export const login = async (url, formData) => {
    
    const response =  await fetch(`${url}/login`, {
        method: ["POST"],
        body: formData,
    });

    const logState = await response.json();

    return logState;

}