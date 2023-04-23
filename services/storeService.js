export async function getItems(){
    const request = await fetch('http://localhost:3000/api/products');
    const items = await request.json();
    return items;
}