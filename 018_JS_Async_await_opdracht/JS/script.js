async function getGenres() {
    genre = await getData();
    return genre;
}
getGenres()