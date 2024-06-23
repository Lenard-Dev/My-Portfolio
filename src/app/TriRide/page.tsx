'use client'

import React from 'react';
import Image from 'next/image';
import { Carousel, Button } from "flowbite-react";


const TriridePage = () => {
    return (
        <div>
            <section className="dark:bg-gray-100 dark:text-gray-800 mt-[80px]">
                <div className="container max-w-5xl px-4 py-12 mx-auto">
                    <div className="grid gap-4 mx-4 sm:grid-cols-12">
                        <div className="col-span-12 sm:col-span-3">
                            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-600">
                                <h3 className="text-3xl font-semibold">Tri-Ride</h3>
                                <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-600">A tricycle booking Application</span>
                                <Image
                                    src={'/Passenger_WelcomePage.png'}
                                    alt={'TriRide Welcome Page'}
                                    width={1000}
                                    height={1000}
                                    className="w-full object-contain responsive-image hidden md:block "
                                />

                            </div>
                        </div>
                        <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
                                    <h3 className="text-xl tracking-wide font-bold">About Tri-Ride </h3>
                                    <p className="mt-3 text-justify">Tri-Ride is an application that connects tricycle drivers and passengers. Tri-Ride allows users to book tricycles for short-distance trips. Users can request tricycle rides, track their travel status in real-time, and use cashless payment methods, ensuring a seamless and hassle-free commuting experience. The application allows passengers to book a ride from their current or designated location to their desired destination, view the cost of the tricycle ride fare, view passenger and driver user profiles and their credit score, and provide alternative payment methods aside from cash. In the passenger side the Ride Status Notifier (RSN) feature will be accessible, and contacts for RSN can be added. It will send a push-notification for the entered contacts that includes the booking information such as initial and designated location and both passenger and driver information.</p>
                                </div>

                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
                                    <h3 className="text-xl tracking-wide font-bold">Technology Used </h3>
                                    <div className="mt-3 text-justify">
                                        <li className={'font-semibold'}>React Native</li>
                                        <ul className={'indent-10 text-justify'}>React Native is an open-source mobile application development framework created by Facebook. It allows developers to build mobile applications for iOS, Android, and other platforms using the same codebase and JavaScript library as React, a popular web development framework.</ul>

                                        <li className={'mt-3 font-semibold'}>Amazon Web Services (AWS) Amplify</li>
                                        <ul className={'indent-10 text-justify'}>Amplify provides a set of tools and services to streamline the development process, including authentication, API management, data storage, and analytics.</ul>

                                        <li className={'mt-3 font-semibold'}>
                                            JavaScript
                                        </li>
                                        <ul className={'indent-10 text-justify'}>
                                            JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior. Web browsers have a dedicated JavaScript engine that executes the client code.
                                        </ul>

                                        <li className={'mt-3 font-semibold'}>Node JS</li>
                                        <ul className={'indent-10 text-justify'}>It allows developers to use JavaScript on the server-side, which was traditionally reserved for client-side web development. Node.js provides an event-driven, non-blocking I/O model, which makes it lightweight and efficient for building scalable and real-time applications.</ul>

                                        <li className={'mt-3 font-semibold'}>Google Maps API</li>
                                        <ul className={'indent-10 text-justify'}>Google Maps API is a web service offered by Google that allows developers to integrate interactive maps and location-based services into their applications. The API provides a variety of features such as map rendering, route calculation, geocoding (converting addresses to latitude/longitude coordinates), and place search.</ul>

                                        <li className={'mt-3 font-semibold'}>
                                            GetStream Chat API
                                        </li>
                                        <ul className={'indent-10 text-justify'}>
                                            GetStream is a company that provides APIs for building scalable and customizable chat applications. They offer a product called Stream Chat, which allows developers to integrate real-time chat functionality into their applications.
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
                                    <h3 className="text-xl tracking-wide font-bold">
                                        Features
                                    </h3>

                                    <div className="h-[650px] sm:h-[650px] xl:h-[650px] 2xl:h-[650px] max-w-[300px] border-violet-500  rounded-xl">
                                        <Carousel slide={false}>
                                            <img src="/Passenger_WelcomePage.png" alt="..." />
                                            <img src="/home.png" alt="..." />
                                            <img src="/menu.png" alt="..." />
                                            <img src="/book1.png" alt="..." />
                                            <img src="/book2.png" alt="..." />
                                            <img src="/book3.png" alt="..." />
                                            <img src="/book4.png" alt="..." />
                                            <img src="/chat.png" alt="..." />
                                            <img src="/chat2.png" alt="..." />
                                            <img src="/emergency.png" alt="..." />
                                            <img src="/qr.png" alt="..." />
                                            <img src="/finish.png" alt="..." />
                                            <img src="/rate.png" alt="..." />

                                        </Carousel>
                                    </div>

                                </div>

                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
                                    <h3 className="text-xl tracking-wide font-bold">
                                        Status
                                    </h3>
                                    <li className={'mt-3 font-bold'}>
                                        Currently at Alpha Testing stage on Google Play
                                    </li>

                                    <img src="/playstore.png" alt="..." />


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