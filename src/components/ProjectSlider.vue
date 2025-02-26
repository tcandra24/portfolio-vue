<template>
  <div class="py-14 lg:py-[100px]">
    <div class="container">
      <div
        class="mb-7 flex flex-col items-center justify-center gap-5 lg:mb-14 lg:flex-row lg:justify-between"
      >
        <slot name="title"></slot>
        <div class="flex items-center justify-end gap-4">
          <router-link
            :to="{ name: 'portfolios' }"
            class="text-sm font-extrabold text-black transition hover:text-secondary dark:text-white dark:hover:text-secondary"
          >
            View All
          </router-link>
          <button
            type="button"
            class="project-slider-button-prev flex h-10 w-10 items-center justify-center rounded-full bg-black/5 transition hover:bg-secondary dark:bg-white/5 dark:hover:bg-secondary"
          >
            <svg
              width="7"
              height="12"
              viewBox="0 0 7 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="text-black rtl:rotate-180 dark:text-white"
            >
              <path
                d="M5.95007 1.2002L1.48924 5.3424C1.06317 5.73803 1.06317 6.41236 1.48924 6.80799L5.95007 10.9502"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              ></path>
            </svg>
          </button>
          <button
            type="button"
            class="project-slider-button-next text-p flex h-10 w-10 items-center justify-center rounded-full bg-black/5 transition hover:bg-secondary dark:bg-white/5 dark:hover:bg-secondary"
          >
            <svg
              width="7"
              height="12"
              viewBox="0 0 7 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="text-black rtl:rotate-180 dark:text-white"
            >
              <path
                d="M1.05005 10.7998L5.51089 6.6576C5.93695 6.26197 5.93695 5.58764 5.51089 5.19201L1.05005 1.0498"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <swiper
      :loop="true"
      slidesPerView="auto"
      :spaceBetween="30"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :navigation="{
        nextEl: '.project-slider-button-next',
        prevEl: '.project-slider-button-prev',
      }"
      :modules="[Navigation, Autoplay]"
      :breakpoints="{
        600: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1000: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      }"
      :dir="store.direction === 'rtl' ? 'rtl' : 'ltr'"
      :key="store.direction === 'rtl' ? 'true' : 'false'"
      class="px-6"
    >
      <swiper-slide v-for="project of props.projects" :key="project.id">
        <div
          class="relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark"
        >
          <router-link
            :to="{ name: 'portfolio', params: { id: project.id } }"
            class="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"
          ></router-link>
          <img
            :src="`https://ui-avatars.com/api/?name=${project.name}&background=random`"
            :alt="project.name"
            class="h-52 w-full rounded-t-3xl object-cover"
          />
          <div class="p-5 text-sm font-bold">
            <h6 class="mb-1 text-black line-clamp-1 dark:text-white">
              {{ project.name }}
            </h6>
            <div class="flex flex-row gap-2">
              <div
                v-for="(tag, index) of project.tags"
                :key="index"
                class="badge badge-info gap-2 text-base text-white"
              >
                {{ tag }}
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useAppStore } from "@/stores/index";
const store = useAppStore();

interface Projects {
  id: number;
  name: string;
  tags: Array<string>;
}

const props = defineProps({
  projects: Array<Projects>,
});
</script>
