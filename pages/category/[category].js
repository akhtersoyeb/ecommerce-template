import Navbar from "../../components/Navbar";
import ProductCard from "../../components/ProductCard";

const trendingProducts = [
    {
        id: '1',
        name: 'Basic Tee',
        href: '/product/demo-product',
        image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        price: '$35',
    },
    {
        id: '2',
        name: 'Basic Tee',
        href: '/product/demo-product',
        image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        price: '$35',
    },
    {
        id: '3',
        name: 'Basic Tee',
        href: '/product/demo-product',
        image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        price: '$35',
    },
    {
        id: '4',
        name: 'Basic Tee',
        href: '/product/demo-product',
        image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        price: '$35',
    },
]

const latestProducts = [
    {
        id: '1',
        name: 'Basic Tee',
        href: '/product/demo-product',
        image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        price: '$35',
    },
    {
        id: '2',
        name: 'Basic Tee',
        href: '/product/demo-product',
        image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        price: '$35',
    },
    {
        id: '3',
        name: 'Basic Tee',
        href: '/product/demo-product',
        image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        price: '$35',
    },
    {
        id: '4',
        name: 'Basic Tee',
        href: '/product/demo-product',
        image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        price: '$35',
    },
]

const collections = [
    {
        name: 'Desk and Office',
        description: 'Work from home accessories',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        href: '/category/demo-category',
    },
    {
        name: 'Self-Improvement',
        description: 'Journals and note-taking',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        href: '/category/demo-category',
    },
    {
        name: 'Travel',
        description: 'Daily commute essentials',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '/category/demo-category',
    },
]


export default function Category() {
    return (
        <>
            <Navbar />
            <div className="bg-slate-900">
                <div className="">
                    {/* Hero Banner */}
                    <div className="h-64 relative w-full object-fill">
                        <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg" alt="Unble to load Category Banner"
                            className="object-cover w-full h-full" />
                        <div className="absolute w-full py-2.5 top-28 inset-x-0  text-white text-4xl font-bold text-center leading-4">Fashion Store</div>
                    </div>

                    {/* Trending Products */}
                    <div className="container pt-16 mx-auto max-w-2xl lg:max-w-7xl pb-10 px-4 sm:px-6 lg:pb-16 lg:px-8">
                        <div className="flex flex-row items-center justify-between">
                            <h2 className="text-2xl font-extrabold text-white">Trending Now</h2>
                            <a href="#" className="text-sm text-indigo-500 hover:text-indigo-600">Show More</a>
                        </div>
                        <div className="grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {trendingProducts.map((product) => (
                                <ProductCard key={product.id} name={product.name} href={product.href} imageSrc={product.image} price={product.price} />
                            ))}
                        </div>
                    </div>

                    {/* Collection Preview */}
                    <div className="bg-slate-800">
                        <div className="">
                            <div className="container pt-16 mx-auto max-w-2xl lg:max-w-7xl pb-10 px-4 sm:px-6 lg:pb-16 lg:px-8">
                                <h2 className="text-2xl font-extrabold text-white">Collections</h2>

                                <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                                    {collections.map((item) => (
                                        <div key={item.name} className="group relative">
                                            <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                                <img
                                                    src={item.imageSrc}
                                                    alt={item.imageAlt}
                                                    className="w-full h-full object-center object-cover"
                                                />
                                            </div>
                                            <h3 className="mt-6 text-sm text-white">
                                                <a href={item.href}>
                                                    <span className="absolute inset-0" />
                                                    {item.name}
                                                </a>
                                            </h3>
                                            <p className="text-base font-semibold text-slate-400">{item.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Latest Products */}
                    <div className="container pt-16 mx-auto max-w-2xl lg:max-w-7xl pb-10 px-4 sm:px-6 lg:pb-16 lg:px-8">
                        <div className="flex flex-row items-center justify-between">
                            <h2 className="text-2xl font-extrabold text-white">Latest Arrivals</h2>
                            <a href="#" className="text-sm text-indigo-500 hover:text-indigo-600">Show More</a>
                        </div>
                        <div className="grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {latestProducts.map((product) => (
                                <ProductCard key={product.id} name={product.name} href={product.href} imageSrc={product.image} price={product.price} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
