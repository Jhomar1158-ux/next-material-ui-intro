import React from 'react'

export const Product = ({id}) => {
    const [idProduct, setIdProduct] = React.useState(id);
    const [data, setData] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        async function fetchData() {
        setIsLoading(true);
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${idProduct}`);
            if (!response.ok) {
            throw new Error('No se pudo obtener el elemento.');
            }
            const data = await response.json();
            setData(data);
            setIsLoading(false);
        } catch (error) {
            setError(error.message);
            setIsLoading(false);
        }
        }
        fetchData();
    }, [idProduct]);

    if (isLoading) {
        return <p>Loading...</p>;
    }
    return (
        <div>
            {data.image}
            {data.title}
            {data.description}
            <button>Add to Cart</button>
        </div>
    )
}
