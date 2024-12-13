import React, { useEffect, useState } from "react";
import money from "../assets/greenmoney.png";
import referrals from "../assets/friends.png";
import daily from "../assets/daily.png";
import blockchain from "../assets/blockchain.png";
import home from "../assets/home.png";
import { useLocation, useNavigate } from "react-router-dom";

function BottomNavigation() {
    const navigate = useNavigate();
    const location = useLocation();

    const [currentScreen, setCurrentScreen] = useState("/");

    // Memperbarui currentScreen saat location.pathname berubah
    useEffect(() => {
        setCurrentScreen(location.pathname);
    }, [location]);

    return (
        <nav className="fixed bottom-2 left-4 right-4 rounded-lg bg-black flex justify-around items-center h-[76px] z-50">
            {/* Home Button */}
            <div
                onClick={() => navigate("/")}
                className={`flex-col items-center justify-center w-14 h-14 rounded-lg ${
                    currentScreen === "/" ? "bg-black" : "bg-gray-900"
                }`}
            >
                <div className="flex flex-col items-center justify-center">
                    <img className="w-7 h-7 object-contain" src={home} alt="Home" />
                    <p className="text-xs text-center text-white">Home</p> {/* Teks putih */}
                </div>
            </div>

            {/* Earn Button */}
            <div
                onClick={() => navigate("/earn")}
                className={`flex-col items-center justify-center w-14 h-14 rounded-lg ${
                    currentScreen === "/earn" ? "bg-black" : "bg-gray-900"
                }`}
            >
                <div className="flex flex-col items-center justify-center">
                    <img className="w-9 h-9 object-contain" src={money} alt="Earn" />
                    <p className="text-xs text-center text-white">Earn</p> {/* Teks putih */}
                </div>
            </div>

            {/* Referrals Button */}
            <div
                onClick={() => navigate("/shares")}
                className={`flex-col items-center justify-center w-14 h-14 rounded-lg ${
                    currentScreen === "/shares" ? "bg-black" : "bg-gray-900"
                }`}
            >
                <div className="flex flex-col items-center justify-center">
                    <img className="w-9 h-9 object-contain" src={referrals} alt="Referrals" />
                    <p className="text-xs text-center text-white">Referrals</p> {/* Teks putih */}
                </div>
            </div>

            {/* Daily Button */}
            <div
                onClick={() => navigate("/daily")}
                className={`flex-col items-center justify-center w-14 h-14 rounded-lg ${
                    currentScreen === "/daily" ? "bg-black" : "bg-gray-900"
                }`}
            >
                <div className="flex flex-col items-center justify-center">
                    <img className="w-8 h-8 object-contain" src={daily} alt="Daily" />
                    <p className="text-xs text-center text-white">Daily</p> {/* Teks putih */}
                </div>
            </div>
            {/* AirDrop Button */}
            <div
                onClick={() => navigate("/airdrop")}
                className={`flex-col items-center justify-center w-14 h-14 rounded-lg ${
                    currentScreen === "/airdrop" ? "bg-black" : "bg-gray-900"
                }`}
            >
                <div className="flex flex-col items-center justify-center">
                    <img className="w-8 h-8 object-contain" src={blockchain} alt="AirDrop" />
                    <p className="text-xs text-center text-white">AirDrop</p> {/* Teks putih */}
                </div>
            </div>
        </nav>
    );
}

export default BottomNavigation;