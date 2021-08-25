var API_KEY = "blablablakey"
const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`

async function getData() {
    try {
        const res = await fetch(apiUrl)
        console.log("response recieved")
        console.log(await res.json())
    } catch (err) {
        console.log(err)
    }
}


// fetch testen
        // fetch(apiUrl)
        //     .then(response => response.json())
        //     .then(data => console.log(data))
        //     .catch(error => {
        //         console.log(error)
        //     });