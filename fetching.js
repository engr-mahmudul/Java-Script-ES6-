const api_link = "https://jsonplaceholder.typicode.com/todos/1"

async function getData(link){
    try{
        const response = await fetch(link)
        const data = await response.json()
        console.log(data)
    }catch(error){
        console.log(error)
    }
}

getData(api_link)
