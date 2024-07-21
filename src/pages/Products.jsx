import useSWR from 'swr';

export default function Products() {
  const fetcher = function (...args) {

 
    return fetch(...args)
      .then(function (res) {
        return res.json()
      }
      )
  };

  const { data, error, isLoading } = useSWR('https://dummyjson.com/products', fetcher);

  if (error) return <h3>Error</h3>;
  if (isLoading) return <h3>Loading...</h3>;

  console.log(data);
  const products = data.products;


  return (
    <div className='flex flex-col gap-3 '>
      <h1>Products</h1>
      <div className='flex flex-col'>
        {products.map((product) => (
          <div className='' key={product.id}>
            <div className=' w-6/12 flex gap-3 flex-col p-3 bg-slate-400 justify-between'> <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>Category: {product.category}</p>
              <p>Price: ${product.price}</p>
              <p>Discount: {product.discountPercentage}%</p>
              <p>Rating: {product.rating}</p>
              <p>Stock: {product.stock}</p>
              <p>Brand: {product.brand}</p>
              <p>SKU: {product.sku}</p>
              <p>Weight: {product.weight} grams</p>
              <p>Warranty: {product.warrantyInformation}</p>
              <p>Shipping: {product.shippingInformation}</p>
              <p>Availability: {product.availabilityStatus}</p>
              <p>Return Policy: {product.returnPolicy}</p>
              <p>Minimum Order Quantity: {product.minimumOrderQuantity}</p>
            </div>




            <div className='w-40 flex '>
              {product.images.map((image, index) => (
                <img key={index} src={image} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
