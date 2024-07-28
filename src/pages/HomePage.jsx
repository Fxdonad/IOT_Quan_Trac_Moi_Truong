import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

function HomePage() {
    return (
        <div className="p-8 prose dark:prose-invert">
            <div className="min-h-screen bg-background text-foreground">
                <Header />
                
                <main className="p-4">
                    <section className="mb-6">
                        <h2 className="text-lg font-semibold">Current Weather Conditions</h2>
                        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="bg-card p-4 rounded-lg shadow">
                                <h3 className="font-semibold">Temperature</h3>
                                <p className="text-card-foreground">15°C</p>
                                <img alt="Temperature icon" src="https://openui.fly.dev/openui/100x100.svg?text=🌡️" />
                            </div>
                            <div className="bg-card p-4 rounded-lg shadow">
                                <h3 className="font-semibold">Humidity</h3>
                                <p className="text-card-foreground">80%</p>
                                <img alt="Humidity icon" src="https://openui.fly.dev/openui/100x100.svg?text=💧" />
                            </div>
                            <div className="bg-card p-4 rounded-lg shadow">
                                <h3 className="font-semibold">Wind Speed</h3>
                                <p className="text-card-foreground">10 km/h</p>
                                <img alt="Wind icon" src="https://openui.fly.dev/openui/100x100.svg?text=🌬️" />
                            </div>
                        </div>
                    </section>
                
                    <section>
                        <h2 className="text-lg font-semibold">Forecast</h2>
                        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="bg-card p-4 rounded-lg shadow">
                                <h3 className="font-semibold">Monday</h3>
                                <p className="text-card-foreground">Sunny</p>
                                <img alt="Sunny weather icon" src="https://openui.fly.dev/openui/100x100.svg?text=☀️" />
                            </div>
                            <div className="bg-card p-4 rounded-lg shadow">
                                <h3 className="font-semibold">Tuesday</h3>
                                <p className="text-card-foreground">Cloudy</p>
                                <img alt="Cloudy weather icon" src="https://openui.fly.dev/openui/100x100.svg?text=☁️" />
                            </div>
                            <div className="bg-card p-4 rounded-lg shadow">
                                <h3 className="font-semibold">Wednesday</h3>
                                <p className="text-card-foreground">Rainy</p>
                                <img alt="Rainy weather icon" src="https://openui.fly.dev/openui/100x100.svg?text=🌧️" />
                            </div>
                            <div className="bg-card p-4 rounded-lg shadow">
                                <h3 className="font-semibold">Thursday</h3>
                                <p className="text-card-foreground">Storm</p>
                                <img alt="Windy weather icon" src="https://openui.fly.dev/openui/100x100.svg?text=🌪️" />
                            </div>
                        </div>
                    </section>
                </main>
                
                <Footer />
            </div>
        </div>
    ); 
}

export default HomePage;