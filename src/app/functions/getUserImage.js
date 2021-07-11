export const getUserImage = async (url) => {

    const response = await fetch(url);
    const bynaryLargeObject = await response.blob();

    return  new URL.createObjectURL(bynaryLargeObject);

}