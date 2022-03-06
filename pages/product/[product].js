// import { useEffect } from 'react';
// import { useRouter } from 'next/router';

import { StarIcon } from '@heroicons/react/solid'
import { ShoppingCartIcon } from '@heroicons/react/outline'

import ProductCard from '../../components/ProductCard'
import Navbar from '../../components/Navbar'
import PaymentSuccessModal from '../../components/PaymentSuccessModal'

const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
    'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
    'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
    'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}

const similarProducts = [
  {
    id: '1',
    name: 'Basic Tee',
    href: '#',
    image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    price: '$35',
  },
  {
    id: '2',
    name: 'Basic Tee',
    href: '#',
    image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    price: '$35',
  },
  {
    id: '3',
    name: 'Basic Tee',
    href: '#',
    image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    price: '$35',
  },
  {
    id: '4',
    name: 'Basic Tee',
    href: '#',
    image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    price: '$35',
  },
]

const customerReviews = [
  {
    id: '1',
    username: 'John Doe',
    rating: '4',
    date: '17th June, 2022',
    body: 'Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.'
  },
  {
    id: '2',
    username: 'John Doe',
    rating: '4',
    date: '17th June, 2022',
    body: 'Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.'
  },
  {
    id: '3',
    username: 'John Doe',
    rating: '4',
    date: '17th June, 2022',
    body: 'Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.'
  },
  {
    id: '4',
    username: 'John Doe',
    rating: '4',
    date: '17th June, 2022',
    body: 'Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.'
  },
  {
    id: '5',
    username: 'John Doe',
    rating: '4',
    date: '17th June, 2022',
    body: 'Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.'
  },
]

const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Product({ status }) {
  // I ran twice here. I don't know why
  console.log(status)

  return (
    <>
      {status && status === 'success' && (
        <PaymentSuccessModal />
      )}

      <Navbar />
      <div className="bg-slate-900">
        <div className="pt-6">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb">
            <ol role="list" className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
              {product.breadcrumbs.map((breadcrumb) => (
                <li key={breadcrumb.id}>
                  <div className="flex items-center">
                    <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-slate-400">
                      {breadcrumb.name}
                    </a>
                    <svg
                      width={16}
                      height={20}
                      viewBox="0 0 16 20"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="w-4 h-5 text-gray-300"
                    >
                      <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                    </svg>
                  </div>
                </li>
              ))}
              <li className="text-sm">
                <a href={product.href} aria-current="page" className="font-medium text-slate-200 hover:text-gray-600">
                  {product.name}
                </a>
              </li>
            </ol>
          </nav>

          {/* Image gallery */}
          <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
            <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
              <img
                src={product.images[0]}
                alt="Unable to load product image."
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
              <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                <img
                  src={product.images[1]}
                  alt="Unable to load product image."
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                <img
                  src={product.images[2]}
                  alt="Unable to load product image."
                  className="w-full h-full object-center object-cover"
                />
              </div>
            </div>
            <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
              <img
                src={product.images[3]}
                alt="Unable to load product image."
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="max-w-2xl mx-auto  py-10 px-4 sm:px-6 lg:max-w-7xl lg:py-16 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
            <div className="flex items-center justify-between lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">{product.name}</h1>
              <ShoppingCartIcon className="h-6 w-6 text-slate-400 flex-shrink-0 cursor-pointer" />
            </div>

            {/* Options */}
            <div className="mt-4 lg:mt-0 lg:row-span-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl text-white">{product.price}</p>

              {/* Reviews */}
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          reviews.average > rating ? 'text-white' : 'text-slate-600',
                          'h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{reviews.average} out of 5 stars</p>
                  <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-500 hover:text-indigo-400">
                    {reviews.totalCount} reviews
                  </a>
                </div>
              </div>

              <div className="mt-10">
                <div>
                  <h3 className="sr-only">Description</h3>
                  <div className="space-y-6">
                    <p className="text-base text-slate-400">{product.description}</p>
                  </div>
                </div>
                <button
                  className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Buy Now
                </button>
              </div>
            </div>

            <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              {/* Description and details */}


              <div className="">
                <h3 className="text-sm font-medium text-slate-100">Highlights</h3>

                <div className="mt-4">
                  <ul role="list" className="pl-4 list-disc text-sm space-y-2">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-slate-400">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-slate-100">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-slate-400">{product.details}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Similar Items */}
          <div className="container mx-auto max-w-2xl lg:max-w-7xl pb-10 px-4 sm:px-6 lg:pb-16 lg:px-8">
            <h2 className="text-3xl text-white">Similar Items</h2>
            <div className="grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {similarProducts.map((product) => (
                <ProductCard key={product.id} name={product.name} href={product.href} imageSrc={product.image} price={product.price} />
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div className="container mx-auto max-w-2xl lg:max-w-7xl pb-10 px-4 sm:px-6 lg:pb-16 lg:px-8">
            <h2 className="text-3xl text-white">Reviews</h2>

            <div className="divide-y divide-slate-400">

              {customerReviews.map((review) => (
                <div key={review.id} className="py-6 flex flex-wrap md:flex-nowrap">
                  <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <span className=" text-slate-200 font-bold">{review.username}</span>
                    <span className="mt-1 text-slate-400 text-sm">{review.date}</span>
                  </div>
                  <div className="md:flex-grow">
                    <div className="flex mb-4">
                      <span className="flex items-center">
                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6 text-indigo-500" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6 text-indigo-500" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6 text-indigo-500" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6 text-indigo-500" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6 text-indigo-500" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <span className="text-slate-200 ml-3">{review.rating} Star Rating</span>
                      </span>

                    </div>
                    <p className="leading-relaxed text-slate-400">{review.body}</p>
                  </div>
                </div>
              ))}


            </div>
          </div>

        </div>

      </div>
    </>
  )
}


export async function getServerSideProps({ query }) {
  console.log(query)
  const status = query.status || ''

  // Pass data to the page via props
  return { props: { status } }
}