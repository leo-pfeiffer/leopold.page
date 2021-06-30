<template>
    <div>
        <div @click="toggle" v-show="!isToggle" class="animated flipInX flashcard">
            <div class="card-header">
                <img :src="require('@/assets/small_square.png')">
            </div>
            <div class="card-content center">
                <div class="font-large">{{name}}</div>
                <div class="font-bold font-medium">{{title}}</div>
            </div>
            <div class="card-footer">
              <a v-bind:href="linkedin" class="fa fa-linkedin" @click.stop></a>
              <a v-bind:href="github" class="fa fa-github" @click.stop></a>
            </div>
        </div>
        <div @click="toggle" v-show="isToggle" class="animated flipInX flashcard">
            <div class="card-header">About me...</div>
            <div class="card-content left-align">
                <div v-for="item of education" :key="item.name" class="cv-item">
                  <div class="font-bold">{{item.uni}}</div>
                  <div class="font-small font-grey"><span class="font-bold">{{item.time}}  </span>{{item.name}}</div>
                </div>
                <hr>
                <div v-for="item of experience" :key="item.name" class="cv-item">
                  <div class="font-bold">{{item.company}}</div>
                  <div class="font-small font-grey"><span class="font-bold">{{item.time}}  </span>{{item.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isToggle: false,
            name: "Leopold Pfeiffer",
            title: "Software Engineer",
            education: [
              {time: '2021-2022', name: 'MSc Software Engineering', uni: 'University of St Andrews, UK'},
              {time: '2020-2021', name: 'MSc Data Intensive Analysis', uni: "University of St Andrews, UK"},
              {time: '2017-2020', name: 'BSc Global Business Management', uni: "Augsburg University, Germany"},
            ],
            experience: [
              {time: '2021 (13 mo)', name: 'Data Engineer & Developer', company: 'DJE Kapital AG'},
              {time: '2020 (3 mo)', name: 'Data Analyst Intern', company: 'DJE Kapital AG'},
            ],
            linkedin: "https://www.linkedin.com/in/leopoldpfeiffer/",
            github: "https://github.com/leo-pfeiffer"
        }
    },
    methods: {
      toggle() {
        this.isToggle=!this.isToggle
      }
    }
}
</script>
<style scoped>

@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';

.center {
    text-align: center;
}

.left-align {
    text-align: left;
}

.flashcard {
    cursor: pointer;
    border-radius: 10px;
    margin: 20px;
    padding: 25px;
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.4);
    text-align: center;
}

.flashcard:hover {
    box-shadow: 0 0px 25px rgba(0, 0, 0, 0.8);
}

.animated {
    animation-duration: 1s;
    animation-fill-mode: both;
}

@keyframes flipInX {
    from {
        transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
        animation-timing-function: ease-in;
        opacity: 0;
    }
    40% {
        transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
        animation-timing-function: ease-in;
    }
    60% {
        transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
        opacity: 1;
    }
    80% {
        transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    }
    to {
        transform: perspective(400px);
    }
}

.flipInX {
    backface-visibility: visible !important;
    animation-name: flipInX;
}

img {
  border-radius: 50%;
  -webkit-filter: drop-shadow(2px 2px 2px #222);
  filter: drop-shadow(2px 2px 2px #222);
  width: 100px;
  height: 100px;
}

.cv-item {
  margin-top: 10px;
  margin-bottom: 10px;
}

.card-header {
    font-size: 32px;
    padding-bottom: 15px;
}

.fa {
  padding: 20px;
  font-size: 30px;
  width: 50px;
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
}

.fa:hover {
  opacity: 0.7;
}

.fa-linkedin {
  background: white;
  color: #007bb5;
}

.fa-github {
  background: white;
  color: black;
}

.font-bold {
  font-weight: bold;
}

.font-large {
  font-size: 32px;
}

.font-medium {
  font-size: 16px;
}

.font-small {
  font-size: 14px;
}

.font-grey {
  color: gray;
}

div {
  white-space: nowrap;
}

</style>
