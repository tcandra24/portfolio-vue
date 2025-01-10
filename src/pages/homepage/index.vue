<template>
  <div>
    <div class="bg-black pt-[82px] lg:overflow-hidden lg:pt-[106px]">
      <div
        class="bg-[url(/assets/images/world-map.png)] bg-cover bg-no-repeat pt-14 lg:pt-20"
      >
        <div class="container">
          <div class="relative">
            <div
              class="text-center lg:w-2/3 lg:ltr:text-left mb-16 lg:rtl:text-right"
            >
              <div
                class="mx-auto mb-5 flex h-[100px] max-w-[255px] items-center lg:float-left lg:mr-7 lg:mb-0"
              >
                <img
                  src="/assets/images/personal-portfolio/website-apps.png"
                  alt=""
                  class="w-full"
                />
              </div>
              <h2
                class="relative text-3xl font-black text-white sm:text-5xl lg:text-[80px] lg:leading-[100px]"
              >
                Hello Friend, I am Tito Software Engineer
              </h2>
            </div>
            <div
              class="absolute bottom-0 hidden w-2/5 ltr:-right-40 rtl:-left-40 rtl:rotate-y-180 lg:block"
            >
              <img
                src="/assets/images/personal-portfolio/avatar-01.png"
                alt=""
                class="w-full rounded-lg"
                data-aos="fade-up"
                data-aos-duration="1000"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="overflow-x-hidden bg-white py-14 dark:bg-gray-dark">
      <div class="container">
        <div class="items-center lg:flex">
          <h2
            class="flex-none border-gray/20 text-center text-xl font-black uppercase text-black dark:text-white lg:ltr:mr-12 lg:ltr:border-r-[3px] lg:ltr:pr-12 lg:ltr:text-left lg:rtl:ml-12 lg:rtl:border-l-[3px] lg:rtl:pl-12 lg:rtl:text-right"
          >
            MY WORKPLACE
          </h2>
          <swiper
            class="mt-10 flex-1 lg:mt-0 xl:w-[1200px] xl:flex-none"
            :loop="true"
            slidesPerView="auto"
            :spaceBetween="10"
            :speed="4000"
            :autoplay="{
              delay: 3000,
              disableOnInteraction: false,
            }"
            :modules="[Autoplay]"
            :breakpoints="{
              320: {
                slidesPerView: 1.7,
              },
              600: {
                slidesPerView: 2,
              },
              1000: {
                slidesPerView: 3,
              },
              1142: {
                slidesPerView: 5,
              },
            }"
            :dir="store.direction === 'rtl' ? 'rtl' : 'ltr'"
            :key="store.direction === 'rtl' ? 'true' : 'false'"
          >
            <swiper-slide>
              <div>
                <img
                  src="/assets/images/fuboru-indonesia.png"
                  alt="Fuboru Indonesia"
                />
              </div>
            </swiper-slide>

            <swiper-slide>
              <div>
                <img
                  src="/assets/images/widaya-inti-plasma.png"
                  alt="Widaya Inti Plasma"
                />
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </section>

    <div
      class="bg-gradient-to-t from-white/50 to-transparent py-14 dark:bg-none md:py-20"
    >
      <div class="container">
        <div class="grid items-center gap-y-16 gap-x-8 lg:grid-cols-2">
          <div class="relative">
            <img
              src="/assets/images/personal-portfolio/women.jpg"
              alt=""
              class="h-full w-full object-cover rounded-lg"
            />
          </div>
          <div>
            <div class="mb-2">
              <h6 class="mb-4 text-lg font-extrabold uppercase text-secondary">
                <span class="text-primary">/</span> About ME
              </h6>
              <h2
                class="text-3xl font-black leading-normal text-black dark:text-white md:text-[40px]"
              >
                I Coding Since 2013
              </h2>
            </div>
            <p class="text-lg font-medium">
              Hello my name is
              <span class="font-bold">Tito Candra Pratama</span>, I am a work at
              Fuboru Indonesia as a software engineer I have passion in several
              programming languages especially Javascript, PHP, Python. I also
              have several web-based projects on Javascript and I am actively
              following the development of Javascript Frameworks like
              <span class="font-bold">Vue</span>,
              <span class="font-bold">React</span>,
              <span class="font-bold">Svelte</span> and
              <span class="font-bold">Angular</span>, One of my projects is the
              website you are visiting today. this website using React and
              Tailwind as CSS Framework.
            </p>
            <div
              class="my-6 grid gap-4 text-lg font-bold text-black dark:text-white sm:mt-12 sm:mb-8 sm:grid-cols-2"
            >
              <div class="flex items-center gap-3">
                <h2 class="text-4xl font-black text-primary md:text-7xl">4+</h2>
                <p>Years of experience</p>
              </div>
              <div class="flex items-center gap-3">
                <h2 class="text-4xl font-black text-secondary md:text-7xl">
                  50+
                </h2>
                <p>Github projects</p>
              </div>
            </div>
            <p class="text-lg font-medium">
              My main programming languages are Javascript and Framework like
              Vue and React library, I'm also still learning Angular and Svelte.
              I tried to find out the differences between existing Javascript
              frameworks and libraries, Thanks.
            </p>
          </div>
        </div>
      </div>
    </div>

    <section class="bg-white py-14 dark:bg-gray-dark md:py-20">
      <div class="container">
        <div
          class="grid rounded-[10px] border-[2px] border-secondary/20 text-center font-semibold text-black dark:text-white sm:grid-cols-3 sm:ltr:text-left sm:rtl:text-right lg:text-xl"
        >
          <div class="px-5 py-8 md:py-10 md:px-12">
            <count-up
              class="mb-4 text-[40px] font-extrabold text-primary"
              :startVal="0"
              :end-val="4"
              :duration="10"
              :options="{ suffix: '+' }"
            ></count-up>
            <h6>Years of experience</h6>
          </div>
          <div class="px-5 py-8 md:py-10 md:px-12">
            <count-up
              class="mb-4 text-[40px] font-extrabold text-primary"
              :startVal="0"
              :end-val="10"
              :duration="10"
              :options="{ suffix: '+' }"
            ></count-up>
            <h6>Projects complete</h6>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Slider -->
    <project-slider :projects="projects">
      <template #title>
        <div class="heading text-center ltr:lg:text-left rtl:lg:text-right">
          <h6>Our Project</h6>
          <h4>Some of our work.</h4>
        </div>
      </template>
    </project-slider>

    <section class="bg-black py-10 md:py-0">
      <div class="container">
        <div class="grid items-center md:grid-cols-2">
          <div class="py-5">
            <div
              class="text-center md:ltr:text-left md:rtl:text-right lg:w-3/4"
            >
              <div class="mb-10">
                <h6
                  class="mb-4 text-lg font-extrabold uppercase text-secondary"
                >
                  <span class="text-primary">/</span> search my github ?
                </h6>
                <h2
                  class="text-3xl font-black leading-tight text-white md:text-[40px]"
                >
                  Here we go
                </h2>
              </div>
              <div class="mt-8">
                <a
                  href="https://github.com/tcandra24"
                  target="_blank"
                  class="bg-secondary py-3 px-5 font-bold text-white transition hover:bg-primary"
                >
                  Check this out
                </a>
              </div>
            </div>
          </div>
          <div class="mt-10 pr-4 md:pr-12">
            <img
              src="/assets/images/version-control-banner.svg"
              alt=""
              data-aos="fade-down"
              data-aos-duration="1000"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import ProjectSlider from "@/components/ProjectSlider.vue";
import CountUp from "vue-countup-v3";
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import { useAppStore } from "@/stores/index";

const store = useAppStore();

const projects = ref([]);

const fetchData = async () => {
  try {
    const response = await fetch(
      "https://api.jsonbin.io/v3/b/676ab6bce41b4d34e46a8280",
      {
        headers: {
          "X-Master-Key": import.meta.env.VITE_MASTER_KEY,
          "X-Access-Key": import.meta.env.VITE_ACCESS_KEY,
          "X-Bin-Meta": "false",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Error when get the data");
    }

    const json = await response.json();
    projects.value = json.projects;
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  fetchData();
});
</script>
