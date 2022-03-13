import "antd/dist/antd.css"
import { Carousel } from 'antd';

import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Footer  from "../components/Footer";
import Link from "next/link";

const discountedProducts = [
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

const specialOfferProducts = [
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
    href: 'category/desk-and-office',
  },
  {
    name: 'Self-Improvement',
    description: 'Journals and note-taking',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: 'category/self-improvement',
  },
  {
    name: 'Travel',
    description: 'Daily commute essentials',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: 'category/travel',
  },
]

export default function Home() {
  return (
    <>

      <Navbar />
      <div className="bg-slate-900 lg:pt-2">

        {/* CAROUSEL SECTION */}
        <div className="max-w-7xl mx-auto lg:px-8  overflow-hidden bg-slate-900">
          <Carousel dotPosition="bottom" autoplay>
            <div>
              <img className="w-full h-auto object-cover overflow-hidden lg:rounded-md" src="https://picsum.photos/720/400?random=1" />
            </div>
            <div>
              <img className="w-full h-auto object-cover overflow-hidden lg:rounded-md" src="https://picsum.photos/720/400?random=2" />
            </div>
            <div>
              <img className="w-full h-auto object-cover overflow-hidden lg:rounded-md" src="https://picsum.photos/720/400?random=3" />
            </div>
            <div>
              <img className="w-full h-auto object-cover overflow-hidden lg:rounded-md" src="https://picsum.photos/720/400?random=4" />
            </div>
          </Carousel>
        </div>


        {/* PRODUCTS ON SALE SECTION */}
        <div className="container pt-16 mx-auto max-w-2xl lg:max-w-7xl pb-10 px-4 sm:px-6 lg:pb-16 lg:px-8">
          <div className="flex flex-row items-center justify-between">
            <h2 className="text-2xl font-extrabold text-white">On Sale</h2>
            <a href="#" className="text-sm text-indigo-500 hover:text-indigo-600">Show More</a>
          </div>
          <div className="grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {discountedProducts.map((product) => (
              <ProductCard key={product.id} name={product.name} href={product.href} imageSrc={product.image} price={product.price} />
            ))}
          </div>
        </div>

        {/* SPECIAL OFFER SECTION */}
        <div className="container mx-auto max-w-2xl lg:max-w-7xl pb-10 px-4 sm:px-6 lg:pb-16 lg:px-8">
          <div className="flex flex-row items-center justify-between">
            <h2 className="text-2xl font-extrabold text-white">Celebrating Women&apos;s Day</h2>
            <a href="#" className="text-sm text-indigo-500 hover:text-indigo-600">Show More</a>
          </div>
          <div className="grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {specialOfferProducts.map((product) => (
              <ProductCard key={product.id} name={product.name} href={product.href} imageSrc={product.image} price={product.price} />
            ))}
          </div>
        </div>

        {/* Category Collection */}
        <div className="bg-slate-800">
          <div className="">
            <div className="container pt-16 mx-auto max-w-2xl lg:max-w-7xl pb-10 px-4 sm:px-6 lg:pb-16 lg:px-8">
              <h2 className="text-2xl font-extrabold text-white">Shop By Category</h2>

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
                      <Link href={item.href}>
                        <a>
                        <span className="absolute inset-0" />
                        {item.name}
                        </a>
                      </Link>
                    </h3>
                    <p className="text-base font-semibold text-slate-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* LATEST PRODUCTS SECTION */}
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

        {/* SERVICES SECTION */}
        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-award"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Awarded Agency</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Divide details about your product or agency work into parts. A paragraph describing a feature will be enough.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                      <i className="fas fa-retweet"></i>
                    </div>
                    <h6 className="text-xl font-semibold">
                      Free Revisions
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                      <i className="fas fa-fingerprint"></i>
                    </div>
                    <h6 className="text-xl font-semibold">
                      Verified Company
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Write a few lines about each one. A paragraph describing a feature will be enough. Keep you user engaged!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="relative block py-12 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center pt-10">
              <div className="w-full lg:w-8/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Want to work with us?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                      Complete this form and we will get back to you in 24 hours.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Full Name"
                        style={{ transition: "all .15s ease" }}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Email"
                        style={{ transition: "all .15s ease" }}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows={4}
                        cols={80}
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Type a message..."
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />

    </>
  )
}

