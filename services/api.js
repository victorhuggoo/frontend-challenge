const urlApi = "https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1"

fetch(urlApi)
    .then(response =>
        response.json()
    ).then(data => {
        var dynamicProducts;

        var apiResponse = data.products[0];

        dynamicProducts += `
            <img src=${apiResponse.image} alt="">
            <strong>${apiResponse.name}</strong>
            <p>${apiResponse.description}</p>

            <p>de: R$:${apiResponse.oldPrice}</p>
            <strong>por: R$ ${apiResponse.price}</strong>
            <p>2x de 78</p>

            <button>comprar</button>
            `;
        document.getElementById('teste').innerText(dynamicProducts)

    });