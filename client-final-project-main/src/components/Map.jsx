import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMap, {
  Popup,
  Marker,
  NavigationControl,
  GeolocateControl,
} from 'react-map-gl';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from '../stores/actionCreator';
import { Link } from 'react-router-dom';

export default function Map() {
  const [lng, setLng] = useState(106.78135621716297);
  const [lat, setLat] = useState(-6.268367798991761);
  const [zoom, setZoom] = useState(11);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const { courses } = useSelector(state => state.courses);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourses());
    setLoading(false);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center p-5 ">
      <ReactMap
        mapboxAccessToken="pk.eyJ1IjoiZmFsZGkwMTI2IiwiYSI6ImNsY3B0N3UxdzJvbjgzcHA4dW9xdm1pa3gifQ.f_fE0qZ7IPzVnlRm1UEibg"
        style={{
          width: '1250px',
          height: '500px',
          borderRadius: '10px',
        }}
        initialViewState={{
          longitude: lng,
          latitude: lat,
          zoom: zoom,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        {courses.map(course => (
          <Marker
            key={course.id}
            longitude={course.Instructor.geometry.coordinates[0]}
            latitude={course.Instructor.geometry.coordinates[1]}
            style={{ zIndex: 1 }}
          >
            <div className="flex flex-col justify-center items-center">
              <button
                onClick={e => {
                  e.preventDefault();
                  setSelectedCourse(course);
                  console.log(course);
                }}
              >
                <img
                  src={course.Instructor.profilePicture}
                  alt="marker"
                  className="w-10 h-10 rounded-full"
                />
              </button>
            </div>
          </Marker>
        ))}

        {selectedCourse ? (
          <Popup
            latitude={selectedCourse.Instructor.geometry.coordinates[1]}
            longitude={selectedCourse.Instructor.geometry.coordinates[0]}
            closeButton={true}
            closeOnClick={false}
            onClose={() => setSelectedCourse(null)}
            anchor="top"
            style={{ zIndex: 2 }}
          >
            <div className="flex flex-col justify-center items-center">
              <img
                src={selectedCourse.Instructor.profilePicture}
                alt="marker"
                className="w-10 h-10 rounded-full"
              />
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-lg font-medium">
                  {selectedCourse.Instructor.fullName}
                </h1>
                <p className="text-lg font-bold">{selectedCourse.name}</p>

                <p className="text-lg font-bold">
                  {selectedCourse.Instructor.email}
                </p>
              </div>
              <Link to={`/course/detail/${selectedCourse.id}`}>
                <button className="text-slate-800 rounded-md px-3 py-1">
                  Go to course
                </button>
              </Link>
            </div>
          </Popup>
        ) : null}

        <GeolocateControl>
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
          onViewportChange=
          {viewport => {
            setLng(viewport.longitude);
            setLat(viewport.latitude);
            setZoom(viewport.zoom);
          }}
        </GeolocateControl>

        <NavigationControl />
      </ReactMap>
    </div>
  );
}
