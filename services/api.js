const urlApi = "https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1"

fetch(urlApi)
    .then(response =>
        response.json()
    ).then(data => {
        var dynamicProducts = "";

        var teste = data;

        console.log(teste);

        var apiResponse = data.products;

        console.log(apiResponse);

        apiResponse.map((product, index) => {
            dynamicProducts += `
            <div class="dynamic-item">
                <img src="http:${product.image}" alt="" >
                <p class="product-name">${product.name}</p>
                <p class="description">${product.description}</p>
    
                <p class="old-price">de: R$:${product.oldPrice}</p>
                <strong>por: R$ ${product.price}</strong>
                <p class="price">ou ${product.installments.count}x de ${product.installments.value}</p>
    
                <button class="btn-buy">Comprar</button>
            </div>`;
        });
        
        document.getElementById('dynamic-content').innerHTML = dynamicProducts 


    });