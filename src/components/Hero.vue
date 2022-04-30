<script>
export default {
    props: ['msg'],
    data() {
        return {
            isOpen: false,
        }
    },
    methods: {
        toggleMenu() {
            this.isOpen = !this.isOpen;
        }
    },
    computed: {
      isSmallScreen() {
        if(window.innerWidth > 768) return true;
        return false;
      }
    }
}
</script>

<template>
  <div class="container flex flex-col-reverse  items-center px-6 mx-auto mt-64 space-y-0 md:space-x-2 md:flex-row md:mt-84">
    <div class="flex flex-col space-y-8 mx-4 md:mx-0">
      <h1 class="text-4xl font-bold text-center md:text-5xl md:text-left">
        {{ msg }}
      </h1>
      <p class="text-center text-md md:text-lg md:text-left lg:text-xl">
        I am a fullstack web developer/software engineer. I have professional experience in the retail industry as a software engineer specifically focusing on UI development.
        I have a B.S. degree in Computer Science from Kennesaw State University.
      </p>
      <div class="flex space-x-2 justify-center md:justify-start md:space-x-8">
        <a class="btn" href="#"></a>
        <a class="btn" href="https://www.linkedin.com/in/samuel-wood-a55717137" target="_blank">
          <img class="linkedIn-logo" src="../image/linkedin-3-xxl.png" alt="">
        </a>
        <a class="btn" href="https://github.com/samcwood" target="_blank">
          <img src="../image/GitHub-Mark-Light-32px.png" alt="">
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .linkedIn-logo {
    height: 32px;
  }
</style>
