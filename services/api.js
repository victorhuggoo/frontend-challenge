
function listProducts(url = null) {

    let urlApi = (url == null) ? "https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1" : "https://"+url;

    fetch(urlApi)
        .then(response =>
            response.json()
        ).then(data => {
            var dynamicProducts = "";
            var button = "";
            var callNextPage = data;
            var apiResponse = data.products;

            apiResponse.map((product, index) => {
                dynamicProducts += `
                <div class="flex-item">
                    <div class="card">
                        <img class="card-image" src="https:${product.image}" alt="image" >
                        <div class="card-body">
                            <h4 class="card-name">${product.name}</h4>
                            <p class="card-description">${product.description}</p>
                            <p class="card-oldPrice">Old price: R$${product.oldPrice}</p>
                            <p class="card-price">por: R$ ${product.price}</p>
                            <p class="card-installments">ou ${product.installments.count} x R$${product.installments.value}</p>
                            <button>Comprar</button>
                        </div>
                    </div>
                </div>`;
            });

            button += `<button class="more" onclick="listProducts('${callNextPage.nextPage}')">Ainda mais produtos aqui!</button>`

            var before = document.getElementById('dynamicProducts').outerHTML;

            document.getElementById('dynamicProducts').innerHTML = before + dynamicProducts;
            document.getElementById('more-products').innerHTML = button


        });
}


window.onload = listProducts();