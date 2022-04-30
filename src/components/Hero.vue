<script>
export default {
  props: {
    msg: String
  },
  data() {
      return {
          isOpen: false,
      }
  },
  methods: {
      toggleMenu() {
          this.isOpen = !this.isOpen;
      }
  }
}
</script>

<template>
  <section id="hero-section" class="section">
    <div class="container flex flex-col-reverse  items-center mx-auto space-y-0 md:space-x-2 md:flex-row md:px-4">
      <div class="flex flex-col space-y-8 mx-4 md:mx-0">
        <h1 class="header-text">
          {{ msg }}
        </h1>
        <p class="text-center text-md font-medium md:text-lg md:text-left lg:text-xl">
          I have professional experience in the retail industry as a software engineer specifically focusing on UI development.
          I am a graduate from the class of 2020 at Kennesaw State University with a B.S. degree in Computer Science.
          I have a passion for learning new skills that can be used by my team/organization.
        </p>
        <div class="flex space-x-2 justify-center md:justify-start md:space-x-8">
          <a class="btn" href="#">
            <img src="../image/download-file.png" alt="">
          </a>
          <a class="btn" href="https://www.linkedin.com/in/samuel-wood-a55717137" target="_blank">
            <img class="linkedIn-logo" src="../image/linkedin-3-xxl.png" alt="">
          </a>
          <a class="btn" href="https://github.com/samcwood" target="_blank">
            <img src="../image/GitHub-Mark-Light-32px.png" alt="">
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .linkedIn-logo {
    height: 32px;
  }
</style>
