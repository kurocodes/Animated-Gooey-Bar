import { FaSpotify, FaCloud } from "react-icons/fa";
import { PiWifiHighBold } from "react-icons/pi";
import { HiBattery100, HiClock } from "react-icons/hi2";
import Icon from "./components/Icon";
import { useState } from "react";

export default function App() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="bg-black w-full h-15 flex justify-center items-center">
      <div className="relative flex items-center h-full">
        <Icon
          index={0}
          hoveredIdx={hoveredIdx}
          onHover={setHoveredIdx}
          Icon={FaSpotify}
        ><span className="text-xs">Spotify</span></Icon>
        <Icon
          index={1}
          hoveredIdx={hoveredIdx}
          onHover={setHoveredIdx}
          Icon={FaCloud}
          text="80&deg;F"
        ><span className="text-xs">Weather</span></Icon>
        <Icon
          index={2}
          hoveredIdx={hoveredIdx}
          onHover={setHoveredIdx}
          Icon={PiWifiHighBold}
        ><span className="text-xs">Wifi</span></Icon>
        <Icon
          index={3}
          hoveredIdx={hoveredIdx}
          onHover={setHoveredIdx}
          Icon={HiBattery100}
        ><span className="text-xs">Battery</span></Icon>
        <Icon
          index={4}
          hoveredIdx={hoveredIdx}
          onHover={setHoveredIdx}
          Icon={HiClock}
        ><span className="text-xs">Clock</span></Icon>

        {/* Debug helper (remove later) */}
        {hoveredIdx !== null && (
          <span className="absolute -bottom-6 text-xs text-gray-500">
            Hovered: {hoveredIdx}
          </span>
        )}
      </div>
    </div>
  );
}
