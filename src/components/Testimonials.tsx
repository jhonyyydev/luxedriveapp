import Image from "next/image"

export default function Testimonials() {
    return (
        <section className="pt-20 pb-2 px-4 bg-white">
            <div className="container mx-auto">
                <div className="flex justify-between items-center px-40 mb-8">
                    <h2 className="text-3xl font-bold">What Our Customers Say</h2>
                    <div className="flex gap-4">
                        <button className="w-10 h-10 rounded-full border flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-chevron-left"
                            >
                                <path d="m15 18-6-6 6-6" />
                            </svg>
                        </button>
                        <button className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-chevron-right"
                            >
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="flex justify-between items-center px-40">
                    <p className="text-xl text-left text-gray-700 font-semibold">“I was really impressed with the level of service I received from this car rental company. The process was smooth and easy, 
                        and the car I rented was in excellent condition. The staff was friendly and helpful, and I felt well taken care of throughout my rental period. I would definitely recommend this 
                        company to anyone looking for a premium car rental experience.”</p>
                </div>
                <div className="flex justify-start items-center py-10 px-40">
                    <div className="w-14 h-14 rounded-full">
                        <Image
                            src="/images/hero/profile.png"
                            alt="Profile Testimonial"
                            width={650}
                            height={540}
                            className="max-w-full h-auto"
                        />
                    </div>
                    <div className="px-4">
                        <h6 className="text-base font-semibold text-black">
                            Noah Brown
                        </h6>
                        <div className="flex justify-start">
                            <p className="text-sm font-normal text-gray-500 mr-0.5">From </p>
                            <p className="text-sm font-semibold text-gray-500">Texas</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}