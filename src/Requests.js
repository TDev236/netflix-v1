const apiKey = '52e9707f89fcab14c7d54abdc4108e7e'

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en=US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en=US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en=US&page=2`,
    requestHorror: `https://api.themoviedb.org/3/movie?api_key=${apiKey}&language=en=US&query=horror&page=2`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en=US&page=1`
}

export default requests