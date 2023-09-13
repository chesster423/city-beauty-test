<template>
  <div>
    <div class="next-steps-container py-6">
      <div class="mx-auto grid gap-4">
        <router-link
          v-if="currentRouteName == 'step-3'"
          :to="{ name: pathName }"
          class="text-right text-base font-medium"
        >
          <button class="unsure-btn relative flex w-full items-center px-5">
            <img :src="images.xImage" class="mr-5 w-6" />
            Unsure what my skin needs
          </button>
        </router-link>

        <router-link
          v-if="currentRouteName == 'step-4'"
          :to="{ name: pathName }"
          class="text-right text-base font-medium"
        >
          <button class="unsure-btn relative flex w-full items-center px-5">
            <img :src="images.xImage" class="mr-5 w-6" />
            None of the above
          </button>
        </router-link>

        <router-link
          :to="{ name: pathName }"
          class="text-right text-base font-medium"
        >
          <button
            class="continue-btn relative flex w-full items-center px-5"
            :class="{
              'opacity-60': !proceedStatus,
              'opacity-100': proceedStatus,
            }"
            :disabled="!proceedStatus"
          >
            Continue
            <img :src="images.arrow" class="absolute w-6" style="right: 30px" />
          </button>
        </router-link>

        <router-link :to="{ name: pathName }" class="text-base text-white">
          <button class="skip-btn w-full px-5">Skip</button>
        </router-link>

        <router-link
          v-if="currentRouteName == 'step-4'"
          :to="{ name: pathName }"
          class="mt-5 text-base text-white"
        >
          <button class="thank-btn w-full p-10">
            <label>Thanks for sharing!</label>
            <p class="mt-5 text-sm">
              We’ve discovered that a lot of people have faced the same
              setbacks. City Beauty has a clear one-step treatment that is easy
              to follow with long-term results. In less than two minutes, you
              will feel better than ever.
            </p>
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NextStepComponent',
  props: {
    pathName: {
      type: String,
      default: 'step-2',
    },
    proceed: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      images: {
        arrow: '/images/city-beauty-funnels/arrow.png',
        xImage: '/images/city-beauty-funnels/x-img.png',
      },
    };
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
    proceedStatus() {
      return this.proceed;
    },
  },
  mounted() {},
  methods: {},
};
</script>
