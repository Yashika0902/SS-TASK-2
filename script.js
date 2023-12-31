document.getElementById('fileInput').addEventListener('change', function(event) {
    let file = event.target.files[0];
    let reader = new FileReader();
    
    reader.onload = function(e) {
      let products = JSON.parse(e.target.result);
      // Now products is an object with all your products
      showProducts(products);
    };
    
    reader.readAsText(file);
  });
  function showProducts(products) {
    let table = '<table>';
    // Add headers
    table += '<tr><th>Title</th><th>Price</th></tr>';
    
    // Sort products by popularity
    products.sort((a, b) => b.popularity - a.popularity);
    
    // Add each product to the table
    for (let product of products) {
      table += `<tr><td>${product.title}</td><td>${product.price}</td></tr>`;
    }
    
    table += '</table>';
    
    // Put the table in your webpage
    document.getElementById('tableContainer').innerHTML = table;
  }
