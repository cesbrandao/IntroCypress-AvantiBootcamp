export function usernameGenerate() {
    const randomNumber = Math.floor(Math.random() * 1000);

    return `user${randomNumber}`;
    //return "user" + randomNumber;
}