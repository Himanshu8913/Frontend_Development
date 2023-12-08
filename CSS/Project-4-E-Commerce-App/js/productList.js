document.addEventListener("DOMContentLoaded", () => {

    async function fetchProducts() {
        const response = await axios.get("https://fakestoreapi.com/products");
        console.log(response.data);
        return response.data;
    }
    fetchProducts();
});

