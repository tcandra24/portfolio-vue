<template>
  <div>
    <div
      class="bg-[url(/assets/images/inner-page-hero-bg.png)] bg-cover bg-bottom bg-no-repeat pt-[82px] lg:pt-[106px]"
    >
      <div class="relative">
        <div class="container">
          <div class="items-center py-10 md:flex md:h-[400px] md:py-0">
            <div class="heading relative mb-0 md:w-[725px]">
              <h4 class="!text-white">{{ project && project.name }}</h4>
              <p
                class="relative mt-7 font-medium text-[#BBC0D0] before:absolute before:top-0 before:h-full before:w-1 before:bg-primary ltr:pl-8 ltr:before:left-0 rtl:pr-8 rtl:before:right-0"
              >
                {{ project && project.category }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="py-14 md:py-[100px]">
      <div class="container">
        <div>
          <h3
            class="mb-7 text-xl font-extrabold text-black dark:text-white sm:text-2xl"
          >
            Technologies
          </h3>
          <div class="overflow-x-auto overflow-y-hidden">
            <ul
              class="flex w-[520px] justify-between gap-4 md:w-auto md:justify-start md:gap-7"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <li
                v-if="project"
                v-for="(tech, index) of project.technology"
                :key="index"
                class="flex h-16 w-16 items-center justify-center rounded-2xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark md:h-20 md:w-20 md:rounded-[32px]"
              >
                <div>
                  <img :src="tech.image" :alt="tech.name" className="w-10" />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="pb-14 md:pb-20">
          <h3
            class="mb-7 text-xl font-extrabold text-black dark:text-white sm:text-2xl"
          >
            Description
          </h3>
          <p
            class="relative font-semibold leading-[30px] before:absolute before:top-0 before:h-full before:w-1 before:rounded before:bg-primary ltr:pl-6 ltr:before:left-0 rtl:pr-6 rtl:before:right-0 md:text-lg"
          >
            {{ project && project.description }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

interface Project {
  id: number;
  name: string;
  category: string;
  description: string;
  tags: Array<string>;
  technology: Array<Technology>;
}

interface Technology {
  name: string;
  image: string;
}

const project = ref<Project>();
const route = useRoute();
const id: string = route.params.id as string;

const fetchProject = async (id: string) => {
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
    const project_detail = json.projects.find(
      (element: Project) => element.id === +id
    );
    project.value = project_detail;
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  if (!id) return;

  fetchProject(id);
});
</script>
