<template>
  <div id="main-body" class="bg-cb leading-normal tracking-normal">
    <div class="flex flex-wrap">
      <div id="main-content" class="min-h-screen w-full pl-0">
        <!-- <router-link :to="{ name: 'step-1' }">Start</router-link> -->
        <div class="mx-auto mb-20 p-5 lg:w-4/12">
          <img :src="logo" class="mx-auto" />

          <div class="progress-bar-container mt-10 flex items-center gap-5">
            <router-link class="arrow" :to="{ name: prevStep() }">
              <i class="fa-solid fa-chevron-left w-full text-center"></i>
            </router-link>
            <div class="progress-bar">
              <div
                class="progress animate"
                :class="'w-' + stepNumber + '/4'"
              ></div>
            </div>
            <div class="step-label">
              <p>{{ stepNumber }}/4</p>
            </div>
          </div>

          <router-view @hasSelected="childTriggered" />

          <NextStepComponent
            :proceed="proceedStatus"
            :path-name="getNextStep()"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NextStepComponent from '@components/funnels/NextStepComponent.vue';

export default {
  name: 'FunnelLayout',
  components: {
    NextStepComponent,
  },
  props: {},
  setup() {
    return {};
  },
  data() {
    return {
      logo: 'images/city-beauty-logo.png',
      proceed_status: false,
      //
    };
  },
  computed: {
    proceedStatus() {
      return this.proceed_status;
    },
    currentRouteName() {
      return this.$route.name;
    },
    stepNumber() {
      const route = this.currentRouteName;
      return route.replace('step-', '');
    },
  },
  watch: {},
  created() {},
  mounted() {},
  beforeUnmount() {},
  updated() {},
  methods: {
    childTriggered(value) {
      this.proceed_status = value;
    },
    getNextStep() {
      if (this.currentRouteName == 'step-1') {
        return 'step-2';
      }
      if (this.currentRouteName == 'step-2') {
        return 'step-3';
      }
      if (this.currentRouteName == 'step-3') {
        return 'step-4';
      }
      if (this.currentRouteName == 'step-4') {
        return 'step-4';
      }
    },
    prevStep() {
      if (this.currentRouteName == 'step-1') {
        return 'step-1';
      }
      if (this.currentRouteName == 'step-2') {
        return 'step-1';
      }
      if (this.currentRouteName == 'step-3') {
        return 'step-2';
      }
      if (this.currentRouteName == 'step-4') {
        return 'step-3';
      }
    },
  },
};
</script>

<style scoped></style>
<style lang="scss" scoped></style>
