import Vue from 'vue'

import { Swiper as SwiperClass, Navigation, Pagination } from 'swiper/core'

import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'

import 'swiper/swiper-bundle.css'

SwiperClass.use([Navigation, Pagination])

Vue.use(getAwesomeSwiper(SwiperClass))
