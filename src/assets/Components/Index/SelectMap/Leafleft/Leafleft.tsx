import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  ZoomControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import {  useState } from "react";
import SearchCity from "../SearchCity/SearchCity";

type position = {
  lng: number;
  lat: number;
};

type props = {
  setLocationName: React.Dispatch<React.SetStateAction<string>>;
  locationName: string;
};

function Leafleft({ setLocationName, locationName }: props) {
const position: [number, number] = [35.7219, 51.3347];


  // useEffect(() => {

  // } , )
  const [suburb, setSuburb] = useState("");
  const [city, setCity] = useState("");

  const [markerPosition, setMarkerPosition] = useState<position | null>();

  const LocationMarkerPoasition = ({
    setMarkerPosition,
  }: {
    setMarkerPosition: React.Dispatch<
      React.SetStateAction<position | null | undefined>
    >;
  }) => {
    useMapEvents({
      click(e: L.LeafletMouseEvent) {
        const newPosition = {
          lat: e.latlng.lat,
          lng: e.latlng.lng,
        };
        setMarkerPosition(newPosition);
        console.log(newPosition);
        fetch(
          `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${newPosition.lat}&lon=${newPosition.lng}&accept-language=fa`
        )
          .then((res) => res.json())
          .then((data) => {
            const address = data.address || {};
            const road = address.road || "";
            const suburb = address.suburb || "";
            const city = address.city || address.town || address.village || "";
            // const neighbourhood = address.neighbourhood || "";
            // const pos = [city, road , suburb].filter(Boolean).join(" - ");
            const firstPart = [city].filter(Boolean).join(",");
            const secondPart = [road, suburb].filter(Boolean).join(" ، ");
            const selcetedLoacationUser = [firstPart, secondPart]
              .filter(Boolean)
              .join(" - ");
            setLocationName(selcetedLoacationUser);
            setSuburb(suburb);
            setCity(city);
          });
      },
    });
    return null;
  };

  const svgMap = `
    <svg width="44" height="64" viewBox="0 0 44 64" fill="none">
      <rect opacity="0.1" x="17" y="47" width="10" height="10" rx="5" fill="#181B1F"/>
      <path d="M21 22C21 21.4477 21.4477 21 22 21C22.5523 21 23 21.4477 23 22V52C23 52.5523 22.5523 53 22 53C21.4477 53 21 52.5523 21 52V22Z" fill="#181B1F"/>
      <g filter="url(#filter0_d)">
        <rect x="6" y="5" width="32" height="32" rx="16" fill="white"/>
      </g>
      <path d="M36 21C36 13.268 29.732 7 22 7C14.268 7 8 13.268 8 21C8 28.732 14.268 35 22 35C29.732 35 36 28.732 36 21Z" fill="#FF00A6"/>
    </svg>
  `;

  const customMapIcon = L.divIcon({
    html: svgMap,
    className: "custom-svg-icon",
    iconSize: [44, 64],
    iconAnchor: [22, 64],
  });

  return (
    <div className="relative h-full">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        zoomControl={false}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url="https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>'
        />

        <LocationMarkerPoasition setMarkerPosition={setMarkerPosition} />

        {markerPosition ? (
          <Marker position={markerPosition} icon={customMapIcon}>
            <Popup>{`${city} , ${suburb}`}</Popup>
          </Marker>
        ) : (
          <Marker position={position} icon={customMapIcon}>
            <Popup>{`${city} , ${suburb}`}</Popup>
          </Marker>
        )}
        <ZoomControl position="bottomleft"/>
      </MapContainer>
      <SearchCity locationName={locationName} />

    </div>
  );
}

export default Leafleft;
