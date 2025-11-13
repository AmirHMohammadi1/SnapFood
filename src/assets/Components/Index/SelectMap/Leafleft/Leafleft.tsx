import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import type { LatLngTuple } from 'leaflet';

const tabrizPosition: LatLngTuple = [38.0962, 46.2738];

// کامپوننت برای دکمه‌های زوم سفارشی
function ZoomButtons() {
  const map = useMap();

  return (
    <div className="absolute bottom-4 right-4 flex flex-col gap-2 z-50">
      <button
        className="bg-white p-2 rounded shadow hover:bg-gray-200 transition"
        onClick={() => map.zoomIn()}
      >
        +
      </button>
      <button
        className="bg-white p-2 rounded shadow hover:bg-gray-200 transition"
        onClick={() => map.zoomOut()}
      >
        -
      </button>
    </div>
  );
}

function Leafleft() {
  return (
    <div className="relative sd w-full h-screen">
      <MapContainer
        zoomControl={false} // غیرفعال کردن کنترل پیش‌فرض Leaflet
        center={tabrizPosition}
        zoom={14}
        style={{ height: '200px', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <Marker position={tabrizPosition}>
          <Popup>اینجا تبریز است</Popup>
        </Marker>

        <ZoomButtons />
      </MapContainer>
    </div>
  );
}

export default Leafleft;
