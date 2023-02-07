import banner from '../assets/banner1.jpg';
import 'swiper/css';
import 'swiper/css/navigation';
import '../index.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Course from '../components/Course';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Home = () => {
  const { courses } = useSelector(state => state.courses);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourses());
    setLoading(false);
  }, []);

  mapboxgl.accessToken =
    'pk.eyJ1IjoiZmFsZGkwMTI2IiwiYSI6ImNsY3B0N3UxdzJvbjgzcHA4dW9xdm1pa3gifQ.f_fE0qZ7IPzVnlRm1UEibg';
  const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [106.79833581810604, -6.24501016331349],
    zoom: 9,
  });

  for (let course of courses.Instructor.geometry.coordinates) {
    new mapboxgl.Marker().setLngLat(resort.geometry.coordinates).addTo(map);
  }

  return (
    <div>
      <div id="banner">
        <Swiper
          slidesPerView={1}
          navigation={true}
          autoplay={{ delay: 3000 }}
          modules={[Navigation]}
          style={{
            '--swiper-navigation-color': '#000',
            '--swiper-navigation-size': '25px',
            '--swiper-navigation-background-color': 'black',
          }}
        >
          <SwiperSlide className="swiper-slide1">
            <img
              src="https://img-c.udemycdn.com/notices/featured_banner/image_udlite/d0e8cb70-d7bf-4f8e-a1e2-fe78f4779eb2.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide1">
            <img
              src="https://img-c.udemycdn.com/notices/featured_banner/image_udlite/487fb3b7-4b6e-4c2f-a3fe-67eb51016502.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="py-32 px-7">
        <section className="flex justify-center">
          <div>Filter</div>
        </section>

        <div>
          <h1>Ini buat map</h1>
          <div
            id="map"
            style="width: 1250px; height: 300px;"
            class="rounded-2xl"
          ></div>
        </div>

        <div>
          <Course />
        </div>
      </div>
    </div>
  );
};

export default Home;
