<template>
  <div id="app">
    <div class="bg-white dark:bg-monokai-blue h-screen flex items-center justify-center">
      <img id="my-img" class="absolute hidden lg:block h-full -left-36 -z-10 opacity-30" :src="require('@/assets/bw.png')" alt="Leopold Pfeiffer">
      <div class="container z-10">
        <div class="text-monokai-blue dark:text-monokai-white text-5xl text-center mt-20">
          {{ name }}
        </div>
        <div>
          <div class="w-5/6 max-w-4xl ml-auto mr-auto mt-16 mb-8 text-center">
            <p class="text-lg leading-normal text-monokai-blue dark:text-monokai-white mb-8">
              {{ bio }}
            </p>
            <div>
              <a v-bind:href="linkedin" class="fa-brands fa-linkedin text-monokai-blue dark:text-monokai-white text-3xl m-1"></a>
              <a v-bind:href="github" class="fa-brands fa-github text-monokai-blue dark:text-monokai-white text-3xl m-1"></a>
              <a v-bind:href="devto" class="fa-brands fa-dev text-monokai-blue dark:text-monokai-white text-3xl m-1"></a>
            </div>
          </div>
          <div class="w-5/6 max-w-4xl ml-auto mr-auto mt-16 mb-8">
            <div class="flex flex-wrap -mx-6 -my-6">
              <div class="w-full sm:w-full lg:w-1/2 px-6 py-6">
                <h3 class="text-3xl font-semibold text-monokai-blue dark:text-monokai-white mb-4">
                  Education
                </h3>
                <div id="education-accordion-collapse" data-accordion="collapse" data-inactive-classes="text-monokai-blue dark:text-monokai-white mb-4 hover:bg-gray-200 dark:hover:bg-gray-700">
                  <div v-for="(item, i) in education" :key="item.name">
                    <div :id="'education-accordion-collapse-heading-' + i">
                      <div type="button" class="w-full text-left text-monokai-blue dark:text-monokai-white mb-4 hover:bg-gray-200 dark:hover:bg-gray-700 p-1 rounded-md cursor-pointer"
                           :data-accordion-target="'#education-accordion-collapse-body-'+i" aria-expanded="false" :aria-controls="'education-accordion-collapse-body-'+i">
                        <div class="font-bold">{{item.uni}}</div>
                        <div class="text-sm"><span class="font-bold">{{item.time}}  </span>{{item.name}}</div>
                      </div>
                    </div>
                    <div :id="'education-accordion-collapse-body-'+i" class="hidden" :aria-labelledby="'education-accordion-collapse-heading-'+i">
                      <div class="px-1">
                        <p class="mb-2 text-gray-500 dark:text-gray-400">{{ item.info }}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 class="text-3xl font-semibold text-monokai-blue dark:text-monokai-white mb-4 mt-8">
                  Work Experience
                </h3>
                <div id="work-accordion-collapse" data-accordion="collapse" data-inactive-classes="text-monokai-blue dark:text-monokai-white mb-4 hover:bg-gray-200 dark:hover:bg-gray-700">
                  <div v-for="(item, i) in experience" :key="item.name">
                    <div :id="'work-accordion-collapse-heading-' + i">
                      <div type="button" class="w-full text-left text-monokai-blue dark:text-monokai-white mb-4 hover:bg-gray-200 dark:hover:bg-gray-700 p-1 rounded-md cursor-pointer"
                           :data-accordion-target="'#work-accordion-collapse-body-'+i" aria-expanded="false" :aria-controls="'work-accordion-collapse-body-'+i">
                        <div class="font-bold">{{item.company}}</div>
                        <div class="text-sm"><span class="font-bold">{{item.time}}  </span>{{item.name}}</div>
                      </div>
                    </div>
                    <div :id="'work-accordion-collapse-body-'+i" class="hidden" :aria-labelledby="'work-accordion-collapse-heading-'+i">
                      <div class="px-1">
                        <p class="mb-2 text-gray-500 dark:text-gray-400">{{ item.info }}</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div class="w-full sm:w-full lg:w-1/2 px-6 py-6">
                <h3 class="text-3xl font-semibold text-monokai-blue dark:text-monokai-white mb-3">
                  Projects
                </h3>

                <div v-for="item of projects" :key="item.name" class="text-monokai-blue dark:text-monokai-white mb-2 hover:bg-gray-200 dark:hover:bg-gray-700 p-1 rounded-md cursor-pointer">
                  <a :href="item.url">
                    <div class="font-bold">{{item.name}}</div>
                    <div class="text-sm">{{item.info}}</div>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'flowbite';

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      isToggle: false,
      name: "Leopold Pfeiffer",
      title: "Software Engineer",
      bio: "Bla bla bla about me",
      education: [
        {time: '2021-2022', name: 'MSc Software Engineering', uni: 'University of St Andrews, UK', info: 'bla bla'},
        {time: '2020-2021', name: 'MSc Data Intensive Analysis', uni: "University of St Andrews, UK", info: 'bla bla'},
        {time: '2017-2020', name: 'BSc Global Business Management', uni: "Augsburg University, Germany", info: 'bla bla'},
      ],
      experience: [
        {time: '2021 (13 mo)', name: 'Data Engineer & Developer', company: 'DJE Kapital AG', info: 'bla bla'},
        {time: '2020 (3 mo)', name: 'Data Analyst Intern', company: 'DJE Kapital AG', info: 'bla bla'},
      ],
      projects: [
        {name: 'Git Commit Analyzer', info: 'Visual analytics tool for your Git commit history', url: 'https://github.com/leo-pfeiffer/git-commit-analyzer'},
        {name: 'Glasshouse', info: 'Data dashboard where I gather data from apps I use everyday', url: 'https://github.com/leo-pfeiffer/glasshouse'},
      ],
      linkedin: "https://www.linkedin.com/in/leopoldpfeiffer/",
      github: "https://github.com/leo-pfeiffer",
      devto: "https://dev.to/leopfeiffer"
    }
  },
}
</script>

<style>
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css';

#my-img {
  background: transparent!important;
}
</style>
