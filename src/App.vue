<script setup>
import Header from './components/Header.vue';
import Skills from './components/Skills.vue';
import Experience from './components/Experience.vue';
import Projects from './components/Projects.vue';
import Education from './components/Education.vue';
</script>

<template>
  <div class="page">
    <div class="container">
      <!-- header  -->
      <Header></Header>

      <div class="body">
        <Skills></Skills>
        <Experience></Experience>
        <Projects></Projects>
        <Education></Education>
      </div>

    </div>
    <button id="download_pdf" @click="downloadCV">Download PDF</button>
  </div>
</template>

<script>
export default {
  methods: {
    downloadCV() {
      const link = document.createElement('a');
      const filePath = '/files/CV-DoHuuNhat.pdf'
      link.href = filePath;
      link.download = filePath.substr(filePath.lastIndexOf('/') + 1);
      link.click();
    }
  }
}
</script>