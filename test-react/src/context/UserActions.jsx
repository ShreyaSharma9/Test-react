export const fetchUser = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const user = await response.json()
    return user
}