fetch('https://63a0f3d024d74f9fe844f13a.mockapi.io/Product',)
    .then(response => response.json())
    .then(response => {
        let field = '';
        response.forEach((productDetail, i) => {
            field += `<tr>
            <td>${i+1}</td>
            <td>${productDetail.name}</td>
            <td>${productDetail.Price}</td>
            <td>${productDetail.description}</td>
          </tr>`
        });
        const header = `<tr class="row-header">
        <th>ID</th>
        <th>Product Name</th>
        <th>Price</th>
        <th>Description</th>
      </tr>`
        const tableContainer = document.querySelector('.table-product');
        tableContainer.innerHTML = header+field;
    });