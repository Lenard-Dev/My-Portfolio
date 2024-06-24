'use client'

import React from 'react';
import Image from 'next/image';
import { Carousel, Button } from "flowbite-react";


const TriridePage = () => {
    return (
        <div>
            <section className="bg-white dark:text-gray-800 mt-[80px]">
                <div className="container max-w-5xl px-4 py-12 mx-auto">
                    <div className="grid gap-4 mx-4 sm:grid-cols-12">
                        <div className="col-span-12 sm:col-span-3">
                            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-600">
                                <h3 className="text-3xl font-semibold">My Certificates</h3>


                            </div>
                        </div>
                        <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9 bg-white">
                            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
                                    <h3 className="text-xl tracking-wide font-bold">Huawei Certificate </h3>
                                    <img src="/huaweCert.png" alt="..." className={'max-w-[400px] max-h-[700px]'}/>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
                                    <h3 className="text-xl tracking-wide font-bold">Oracle Certificate </h3>
                                    <img src="/oracleCert.png" alt="..." className={'max-w-[400px] max-h-[700px]'}/>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
                                    <h3 className="text-xl tracking-wide font-bold">SAP Business One Certificate </h3>
                                    <img src="/sapCert1.png" alt="..." className={'max-w-[400px] max-h-[700px]'}/>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
                                    <h3 className="text-xl tracking-wide font-bold">SAP Business One Certificate 2 </h3>
                                    <img src="/sapCert2.png" alt="..." className={'max-w-[400px] max-h-[700px]'}/>
                                </div>

                                



                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}



export default TriridePage;