<template>
  <div id="app" class="h-screen flex items-start justify-center">
      <div class="container">

        <nav class="py-4">
          <div class="container px-4 flex">
            <span class="bg-white dark:bg-monokai-blue align-center ml-auto">
              <button id="darkmode-button" class="text-xs p-1 rounded-md bg-monokai-gray" v-on:click="toggleButton">
                <svg v-if="darkMode" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" stroke="white" fill="white" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
                <svg v-if="!darkMode" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="white">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
                </svg>
              </button>
            </span>
          </div>
        </nav>

        <div class="text-monokai-red text-center text-5xl mt-10">
          <span>{{ name }} </span>
        </div>

        <div>
          <div class="w-5/6 max-w-4xl ml-auto mr-auto mt-16 mb-8 text-center justify-center">
            <div class="grid place-items-center">
              <p class="text-lg leading-normal text-monokai-blue dark:text-monokai-white mb-8 max-w-2xl">
                Hi, I'm <span class="text-monokai-purple dark:text-monokai-green">Leo</span> - I'm a <span class="text-monokai-purple dark:text-monokai-green">Data / Software Engineer</span> currently working at Addepar.
                I'm interested in all things <span class="text-monokai-purple dark:text-monokai-green">data</span> and <span class="text-monokai-purple dark:text-monokai-green">full-stack web development</span>.
                When I'm not writing code, you'll likely find me working out or enjoying a good cup of coffee.
              </p>
            </div>
            <div>
              <a v-bind:href="linkedin" class="fa-brands fa-linkedin text-monokai-purple dark:text-monokai-green text-3xl m-1" target="_blank"></a>
              <a v-bind:href="github" class="fa-brands fa-github text-monokai-purple dark:text-monokai-green text-3xl m-1" target="_blank"></a>
              <a v-bind:href="devto" class="fa-brands fa-dev text-monokai-purple dark:text-monokai-green text-3xl m-1" target="_blank"></a>
            </div>
          </div>
          <div class="w-5/6 max-w-4xl ml-auto mr-auto mt-16 mb-8">
            <div class="flex flex-wrap -mx-6 -my-6">
              <div class="w-full sm:w-full lg:w-1/2 px-6 py-6 ">
                <h3 class="text-3xl font-semibold text-monokai-red mb-4">
                  Work Experience
                </h3>
                <div id="work-accordion-collapse" data-accordion="collapse" data-inactive-classes="text-monokai-blue dark:text-monokai-white mb-4 hover:bg-gray-200 dark:hover:bg-gray-700">
                  <div v-for="(item, i) in experience" :key="item.name">
                    <div :id="'work-accordion-collapse-heading-' + i">
                      <div class="w-full text-left text-monokai-blue dark:text-monokai-white hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-md cursor-pointer"
                           :data-accordion-target="'#work-accordion-collapse-body-'+i" aria-expanded="false" :aria-controls="'work-accordion-collapse-body-'+i">
                        <div class="flex justify-between">
                          {{item.company}}
                          <svg data-accordion-icon class="w-6 h-6 rotate-180 shrink-0" fill="gray" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">{{item.time}} | {{item.name}}</div>
                      </div>
                    </div>
                    <div :id="'work-accordion-collapse-body-'+i" class="hidden" :aria-labelledby="'work-accordion-collapse-heading-'+i">
                      <div class="px-1">
                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400" v-for="(exp, i) in item.info" :key="i">{{ exp }}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 class="text-3xl font-semibold text-monokai-red mb-4 mt-8">
                  Education
                </h3>
                <div id="education-accordion-collapse" data-accordion="collapse" data-inactive-classes="text-monokai-blue dark:text-monokai-white mb-4 hover:bg-gray-200 dark:hover:bg-gray-700">
                  <div v-for="(item, i) in education" :key="item.name">
                    <div :id="'education-accordion-collapse-heading-' + i">
                      <div class="w-full text-left text-monokai-blue dark:text-monokai-white hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-md cursor-pointer"
                           :data-accordion-target="'#education-accordion-collapse-body-'+i" aria-expanded="false" :aria-controls="'education-accordion-collapse-body-'+i">
                        <div class="flex justify-between">
                          {{item.uni}}
                          <svg data-accordion-icon class="w-6 h-6 rotate-180 shrink-0" fill="gray" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">{{item.time}} | {{item.name}}</div>
                      </div>
                    </div>
                    <div :id="'education-accordion-collapse-body-'+i" class="hidden" :aria-labelledby="'education-accordion-collapse-heading-'+i">
                      <div class="px-1">
                        <p class="mb-2 text-gray-500 dark:text-gray-400 text-sm" v-for="(exp, i) in item.info" :key="i">{{ exp }}</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div class="w-full sm:w-full lg:w-1/2 px-6 lg:py-6">
                <h3 class="text-3xl font-semibold text-monokai-red mb-3">
                  Projects
                </h3>

                <div v-for="item of projects" :key="item.name" class="text-monokai-blue dark:text-monokai-white mb-2 hover:bg-gray-200 dark:hover:bg-gray-700 p-1 rounded-md cursor-pointer p-2">
                  <a :href="item.url" target="_blank">
                    <div>{{item.name}}</div>
                    <div class="text-sm text-gray-500 dark:text-gray-400"><span class="fa-brands fa-github">&nbsp;&nbsp;</span>{{item.info}}</div>
                  </a>
                </div>

                <hr class="mt-4 mb-4">
                <a href="https://github.com/leo-pfeiffer?tab=repositories" class="text-sm text-monokai-blue dark:text-monokai-white mb-2 hover:bg-gray-200 dark:hover:bg-gray-700 p-1 rounded-md cursor-pointer" target="_blank">
                  ➝ more on GitHub
                </a>
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
  mounted() {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage['color-theme'] === 'dark' ||
        (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      this.darkMode = true;
    } else {
      document.documentElement.classList.remove('dark')
      this.darkMode = false;
    }
  },
  methods: {
    toggleButton() {
      // if set via local storage previously
      if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
          document.documentElement.classList.add('dark');
          localStorage.setItem('color-theme', 'dark');
          this.darkMode = true;
        } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('color-theme', 'light');
          this.darkMode = false;
        }
        // if NOT set via local storage previously
      } else {
        if (document.documentElement.classList.contains('dark')) {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('color-theme', 'light');
          this.darkMode = false;
        } else {
          document.documentElement.classList.add('dark');
          localStorage.setItem('color-theme', 'dark');
          this.darkMode = true;
        }
      }
    }
  },
  data() {
    return {
      darkMode: false,
      isToggle: false,
      name: "Leo Pfeiffer",
      title: "Software Engineer",
      education: [
        {time: '2021-2022', name: 'MSc Software Engineering', uni: 'University of St Andrews, UK',
          info: [
              "Particularly interested in data-driven systems and full-stack web development",
              "Modules: Software Engineering Practice/Principles, Software Architecture, AI Practice, Constraint Programming, Database Management Systems",
          ]},
        {time: '2020-2021', name: 'MSc Data Intensive Analysis', uni: "University of St Andrews, UK",
          info: [
              "Data science degree, focussed on statistical programming, mostly in R",
              "Modules: OOP, Statistical Computing, Advanced Data Analysis, Data Visualization, ...",
              "Found Software Engineering as my true passion"
          ]},
        {time: '2017-2020', name: 'BSc Global Business Management', uni: "Augsburg University, Germany",
          info: [
              "Focussed on finance and quantitative method",
              "Modules: Data Analysis, Operations Research, Corporate Finance, ...",
              "Started playing around with Python and R on the side and fell in love with programming",
          ]},
      ],
      experience: [
        {time: 'since Sep 2022', name: 'Data Engineer', company: 'Addepar',
          info: [
            "Developing and maintaining data pipelines for financial data",
            "Tech: Java"
          ]},
        {time: '2021 (13 mo)', name: 'Data Engineer & Developer', company: 'DJE Kapital AG',
          info: [
            "Developed data pipelines and monitoring algorithms for compliance tool; first fully cloud-based application at DJE deployed on Azure",
            "Integrated Bloomberg Data API into an internal data management system",
            "Tech: Python, Django, JS, PostgreSQL, Docker, Azure"
          ]},
        {time: '2020 (3 mo)', name: 'Data Analyst Intern', company: 'DJE Kapital AG',
          info: [
              "Implemented price-simulations of different asset classes",
              "Initiated and created BI tool for geographical analysis of customer data allowing for more tailored marketing",
              "Tech: Python, numpy, pandas, matplotlib, JS"
          ]},
      ],
      projects: [
        {name: 'Zebbra', info: 'Zebbra is a web application for Financial Planning & Analysis for small businesses', url: 'https://github.com/leo-pfeiffer/zebbra'},
        {name: 'Git Commit Analyzer', info: 'Visual analytics tool for your Git commit history', url: 'https://github.com/leo-pfeiffer/git-commit-analyzer'},
        {name: 'Glasshouse', info: 'Data dashboard where I gather data from apps I use everyday', url: 'https://github.com/leo-pfeiffer/glasshouse'},
        {name: 'EpiSim: A Web App for Epidemic Modelling', info: 'Modelled complex contact network from mobility data and built epidemic simulations integrated into web app', url: 'https://github.com/leo-pfeiffer/epi-sim'},
        {name: 'Scala Equation Parser', info: 'Simple command line equation parser and evaluator written in Scala to practice functional programming in Scala', url: 'https://github.com/leo-pfeiffer/equation-parser'},
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

</style>
