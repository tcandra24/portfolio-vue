<template>
  <div>
    <div
      class="bg-[url(/assets/images/inner-page-hero-bg.png)] bg-cover bg-bottom bg-no-repeat pt-[82px] lg:pt-[106px]"
    >
      <div class="relative">
        <div class="container">
          <div
            class="items-center justify-between py-10 md:flex md:h-[400px] md:py-0"
          >
            <div
              class="heading relative mb-0 text-center ltr:md:text-left rtl:md:text-right"
            >
              <h6>Our Portfolio</h6>
              <h4 class="!text-white">Some of my projects</h4>
            </div>
            <div
              class="relative"
              :data-aos="store.direction === 'rtl' ? 'fade-right' : 'fade-left'"
              data-aos-duration="1000"
            >
              <img
                src="/assets/images/portfolio-logo.svg"
                alt="Project Logo"
                class="mx-auto rtl:rotate-y-180 md:mx-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="pt-12 pb-14 md:pb-[100px]">
      <div class="container">
        <template v-if="categories && projects">
          <div class="overflow-x-auto">
            <ul
              class="filters portfolio-filter mx-auto flex w-max gap-7 whitespace-nowrap pb-2.5 font-bold dark:text-white"
            >
              <li class="filter" :class="{ active: activeTab === 'all' }">
                <button
                  type="button"
                  class="rounded-[10px] bg-gray/5 py-4 px-5 leading-5 transition hover:bg-secondary hover:text-white"
                  @click="activeTab = 'all'"
                >
                  All Work
                </button>
              </li>

              <li
                v-for="category of categories"
                :key="category.id"
                class="filter"
                :class="{ active: activeTab === 'design' }"
              >
                <button
                  type="button"
                  class="rounded-[10px] bg-gray/5 py-4 px-5 leading-5 transition hover:bg-secondary hover:text-white"
                  @click="activeTab = category.name"
                >
                  {{ category.name }}
                </button>
              </li>
            </ul>
          </div>
          <div class="projects mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div
              v-for="project of projects"
              :key="project.id"
              class="project"
              :class="
                activeTab === 'all' || activeTab === project.category
                  ? 'block'
                  : 'hidden'
              "
            >
              <div
                class="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none"
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
                  <h6 class="mb-1 text-black dark:text-white">
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
            </div>
          </div>
        </template>
        <div v-else className="w-full flex justify-center">
          <span className="loading loading-spinner loading-lg mx-auto"></span>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useAppStore } from "@/stores/index";
const store = useAppStore();

const activeTab = ref("all");

interface Projects {
  id: number;
  name: string;
  category: string;
  tags: Array<string>;
}

interface Categories {
  id: number;
  name: string;
}

const projects = ref<Projects[]>([]);
const categories = ref<Categories[]>([]);

const fetchProjects = async () => {
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

const fetchCategories = async () => {
  try {
    const response = await fetch(
      "https://api.jsonbin.io/v3/b/677154d9e41b4d34e46ce0b7",
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
    categories.value = json.categories;
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  fetchProjects();
  fetchCategories();
});
</script>
