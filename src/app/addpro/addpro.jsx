
//import { useState } from 'react';
import ProductUploadForm from './ProductUploadForm';
import CategoryManagement from './CategoryManagement';

const HomePage = () => {
    //const [products, setProducts] = useState([]);
    //const [selectedCategory, setSelectedCategory] = useState('');

    // const handleProductUpload = (productData) => {
    //     // Add new product to the list
    //     setProducts([...products, productData]);
    // };

    // const handleCategorySelect = (category) => {
    //     // Filter products based on selected category
    //     setSelectedCategory(category);
    // };

    return (
        <div>
            <h1>Farmer Dashboard</h1>
            <ProductUploadForm onSubmit={handleProductUpload} />
            <CategoryManagement
                categories={['Fruits', 'Vegetables', 'Grains', 'Dairy Products']}
                onSelectCategory={handleCategorySelect}
            />
            <h2>Products</h2>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        <h3>{product.productName}</h3>
                        <p>Description: {product.description}</p>
                        <p>Quantity Available: {product.quantity}</p>
                        <p>Price: ${product.price}</p>
                        <img src={URL.createObjectURL(product.image)} alt={product.productName} style={{ maxWidth: '200px' }} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HomePage;