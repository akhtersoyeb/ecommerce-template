
export default function OrderCard({ id, image, productName, productUrl, category, status, price }) {
    return (
        <>
            <div className="flex py-6">
                <div className="h-24 w-24 md:h-48 md:w-48 flex-shrink-0 overflow-hidden rounded-md border border-slate-800">
                    <img
                        src={image}
                        alt="Unable to load image"
                        className="h-full w-full object-cover object-center"
                    />
                </div>

                <div className="pl-2 sm:pl-8 md:pl-16 md:py-8 flex flex-1 flex-col">
                    <div>
                        <div className="flex justify-between text-base font-medium text-slate-100">
                            <h3>
                                <a href={productUrl}> {productName} </a>
                            </h3>
                            <p className="ml-4 text-lg text-slate-200">{price}</p>

                        </div>
                        <p className="mt-1 text-sm text-slate-400">{category}</p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-slate-400">{status}</p>
                        
                    </div>
                </div>
            </div>
        </>
    )
}
