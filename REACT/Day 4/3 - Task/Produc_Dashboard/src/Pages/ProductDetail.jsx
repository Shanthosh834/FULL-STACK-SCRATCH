import { useParams, useNavigate } from "react-router-dom";

function ProductDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    const allProducts = [
        { id: 1, name: "Laptop", price: "$999" },
        { id: 2, name: "Phone", price: "$699" },
        { id: 3, name: "Headphones", price: "$199" },
        { id: 4, name: "T-Shirt", price: "$29" },
        { id: 5, name: "Jeans", price: "$59" }
    ];

    const product = allProducts.find(p => p.id === Number(id));

    return (
        <div>
            <h3>📦 Product Detail</h3>
            {product ? (
                <div>
                    <p><strong>Name:</strong> {product.name}</p>
                    <p><strong>Price:</strong> {product.price}</p>
                    <p><strong>ID:</strong> {product.id}</p>
                </div>
            ) : (
                <p>❌ Product not found!</p>
            )}
            <button onClick={() => navigate(-1)}>🔙 Go Back</button>
        </div>
    );
}

export default ProductDetail;