const urlApi = "https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1"
fetch(urlApi)
    .then(function(response) {
        return console.log(response.json());
    })
