import React from 'react'
import MiningButton from '../components/MiningButton'; // Pastikan path sesuai


function Home() {
    return (
        <div className="flex flex-col h-screen relative">
            <div className="flex items-center justify-center at-16">
                <MiningButton />
            </div>
        </div>
    );
}

export default Home;