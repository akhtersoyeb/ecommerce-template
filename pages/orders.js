
import OrderCard from "../components/OrderCard"
import Navbar from "../components/Navbar"

const orders = [
    {
        id: '1',
        productName: 'Basic Tee',
        productUrl: '/product/demo-product/',
        category: 'Fashion',
        image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        price: '$35',
        status: 'Arriving on Tuesday'
    },
    {
        id: '2',
        productName: 'Basic Tee',
        productUrl: '/product/demo-product/',
        category: 'Fashion',
        image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        price: '$35',
        status: 'Arriving on Tuesday'
    },
    {
        id: '3',
        productName: 'Basic Tee',
        productUrl: '/product/demo-product/',
        category: 'Fashion',
        image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        price: '$35',
        status: 'Arriving on Tuesday'
    },
    {
        id: '4',
        productName: 'Basic Tee',
        productUrl: '/product/demo-product/',
        category: 'Fashion',
        image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        price: '$35',
        status: 'Arriving on Tuesday'
    },
]

export default function Orders() {

    return (
        <>
            
            <Navbar />
            <div className="bg-slate-900 min-h-screen">
                {/* Orders */}
                <div className="container pt-16 mx-auto max-w-2xl lg:max-w-7xl pb-10 px-4 sm:px-6 lg:pb-16 lg:px-8">
                        <h2 className="text-2xl font-extrabold text-white">My Orders</h2>
                            
                        <div className="flex flex-col mt-6 divide-y divide-slate-700">
                            {orders.map((order) => (
                                <OrderCard key={order.id} id={order.id} productName={order.productName} productUrl={order.productUrl} image={order.image} price={order.price} status={order.status} category={order.category} />
                            ))}
                        </div>
                    </div>
            </div>
        </>
    )
}
