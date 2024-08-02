import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Map from '../component/Map';

function MapPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow p-4 md:p-8 lg:p-16">
                <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Google Map</h1>
                <Map />
            </main>
            <Footer />
        </div>
    );
}

export default MapPage;
