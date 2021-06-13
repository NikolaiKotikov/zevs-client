import Vue from 'vue'

import { Swiper as SwiperClass, Navigation } from 'swiper/core'

import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'

import 'swiper/swiper-bundle.css'

SwiperClass.use([Navigation])

Vue.use(getAwesomeSwiper(SwiperClass))
