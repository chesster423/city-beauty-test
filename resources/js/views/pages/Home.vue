<template>
  <div id="homepage" class="mx-auto"></div>
</template>

<script>
import { mapGetters } from 'vuex';
import { ChatBubbleLeftEllipsisIcon } from '@heroicons/vue/24/outline';
import Faqs from '@components/content/FAQS.vue';
import AppFooter from '@components/AppFooter.vue';
import AppCarousel from '@components/common/AppCarousel.vue';

export default {
  name: 'Home',
  components: {
    ChatBubbleLeftEllipsisIcon,
    Faqs,
    AppFooter,
    AppCarousel,
  },
  props: {},
  data() {
    return {
      companyLogo: 'images/logo.png',
      logoImageAlt: 'Company Logo',
      video: window.location.origin + '/videos/home.mp4',
      featureImages: [
        window.location.origin + '/images/home/microchip.png',
        window.location.origin + '/images/home/clock.png',
        window.location.origin + '/images/home/key.png',
      ],
      backgroundImages: {
        carsona: window.location.origin + '/images/home/pattern-car-bg.png',
        pattern: window.location.origin + '/images/home/pattern-bg.png',
      },
      carouselImages: [
        window.location.origin + '/images/home/carousel-capricorn.png',
        window.location.origin + '/images/home/carousel-pluseight.png',
        window.location.origin + '/images/home/carousel-spacecubed.png',
        window.location.origin + '/images/home/carousel-techstars.png',
      ],
      testamentImages: [
        window.location.origin + '/images/home/person-adam.jpg',
        window.location.origin + '/images/home/person-bec.png',
        window.location.origin + '/images/home/person-javaid.jpg',
      ],
    };
  },
  computed: {
    ...mapGetters({
      authenticated: 'auth/authenticated',
      user: 'auth/user',
    }),
    featuresData() {
      return this.$store.getters.getHomeData.featuresData;
    },
  },
};
</script>
