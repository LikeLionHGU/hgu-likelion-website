import { useEffect } from 'react';
import { position } from '../utils/commons';

const { kakao }: any = window;

const Map = () => {
  useEffect(() => {
    const mapContainer = document.getElementById('map');
    const mapOption = {
      center: new kakao.maps.LatLng(position.latitude, position.longitude),
      level: 4,
    };
    const map = new kakao.maps.Map(mapContainer, mapOption);
    const zoomControl = new kakao.maps.ZoomControl();
    const marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(position.latitude, position.longitude),
      title: position.name,
    });
    marker.setMap(map);
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
  }, []);

  return (
    <div
      id="map"
      style={{
        width: '100%',
        height: '400px',
      }}
    ></div>
  );
};

export default Map;
