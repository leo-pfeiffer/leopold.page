const makeHero = function() {
    console.log('Hello from makeLayout()')

    const heroVue = new Vue({
        el: "#hero",
        data: {
            name: "Leopold Pfeiffer",
            tagline: "Software Engineer.",
            socials: {
                linkedin: 'https://www.linkedin.com/in/leopoldpfeiffer/',
                github: 'https://github.com/leo-pfeiffer'
            }
        }
    })

}

window.onload = makeHero;