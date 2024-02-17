//import { useState } from 'react';

const ProductUploadForm = ({ onSubmit }) => {
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form validation
        if (!productName || !description || !quantity || !price || !image) {
            alert('Please fill in all fields');
            return;
        }
        // Prepare product data
        const productData = {
            productName,
            description,
            quantity,
            price,
            image,
        };
        // Pass product data to parent component
        onSubmit(productData);
        // Reset form fields
        setProductName('');
        setDescription('');
        setQuantity('');
        setPrice('');
        setImage(null);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Product Name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <input
                type="number"
                placeholder="Quantity Available"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
            />
            <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
            />
            <button type="submit">Upload Product</button>
        </form>
    );
};

export default ProductUploadForm;