<template>
  <div>
    <Navbar :searchQuery="searchQuery" @update:searchQuery="searchQuery = $event" />
    <router-view :searchQuery="searchQuery" />
    <Footer />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import Navbar from './components/Navbar.vue'
import Footer from './components/pages/Footer.vue'

export default defineComponent({
  components: {
    Navbar,
    Footer
  },
  setup() {
    const searchQuery = ref(''); 
    return {
      searchQuery
    }
  }
});

</script>