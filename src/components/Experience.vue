<template>
  <section id="experience-section" class="section">
    <div class="container flex flex-col space-y-2 mx-auto px-4">
        <h1 class="header-text">
          Experience
        </h1>
        <h2 class="text-center font-semibold  text-lg font-normal my-4 md:text-left md:text-2xl">November 2020 - Now</h2>
        <p class="paragraph-text">
          I have been working at Macy's Technology as a software engineer.
          I focus specifically on front-end web development involving UI updates and redesign on both the macy's and bloomingdale's websites.
          I handle changes to api requests and implement new site design components and updates.
        </p>
        <div class="flex flex-col pt-8 items-center space-y-3 md:space-y-0 md:space-x-2 md:flex-row">
          <div class="flex md:w-1/2">
              <img class="exp-pic" src="../image/mcom-homepage.png" alt="">
          </div>
          <div class="flex md:w-1/2">
              <img class="exp-pic" src="../image/bcom-homepage.png" alt="">
          </div>
        </div>
    </div>
  </section>
</template>

<style lang="scss">
  .exp-pic {
    max-height: 278px;
  }
  #experience-section {
    background-color: whitesmoke;
  }
</style>