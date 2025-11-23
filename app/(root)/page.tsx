 
import  ProductList from '@/components/shared/product/product-list';
import { getLatestProducts } from '@/lib/actions/product.actions';
// import sampleData from '@/db/sample-data';

const Homepage = async () => { 
  const latestProducts = await getLatestProducts()

  return (
    <> 
    <h1>Home page</h1>
    <ProductList 
    // data={sampleData.products} 
    data={latestProducts}
    title="Shirts" limit={4}
    />
    </>
  );
};

export default Homepage;
