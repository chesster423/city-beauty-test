<template>
  <div class="mx-auto pt-8">
    <div class="text-white">
      <h2 class="cb-header mb-10 mt-5">
        Have you experienced any of these issues in your previous skincare
        attempts?
      </h2>
    </div>

    <div class="grid gap-4">
      <div
        v-for="(val, key) in options"
        :key="key"
        class="option-container relative flex grid cursor-pointer items-center px-5"
        :class="{ selected: val.selected }"
        @click="
          val.selected = !val.selected;
          setProceed();
        "
      >
        <div class="flex items-center">
          <div class="border-1 mr-3 h-5 w-5 border border-solid p-0.5">
            <img v-if="val.selected" :src="check" />
          </div>
          <div class="w-full">
            <label class="text-lg font-medium lg:text-xl">{{
              val.label
            }}</label>
          </div>
        </div>
      </div>
    </div>
    <hr class="mb-3 mt-10" style="border-top: 3px solid #57657a" />
  </div>
</template>

<script>
import NextStepComponent from '@components/funnels/NextStepComponent.vue';

export default {
  name: 'Funnel1',
  components: {
    NextStepComponent,
  },
  props: {},
  data() {
    return {
      options: [
        {
          label: 'Overwhelmed, too many products to keep track of',
          selected: false,
        },
        {
          label: 'Overcomplicated, hard to understand ingredients',
          selected: false,
        },
        {
          label: 'Overcomplicated, hard to understand ingredients',
          selected: false,
        },
        {
          label: 'No Results',
          selected: false,
        },
        {
          label: 'Anxiety',
          selected: false,
        },
      ],
      check: '/images/city-beauty-funnels/check.png',
    };
  },
  computed: {},
  mounted() {
    this.$emit('hasSelected', false);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  },
  methods: {
    setProceed(val) {
      const count = this.options.filter((e) => e.selected === true).length;
      if (count > 0) {
        this.$emit('hasSelected', true);
      } else {
        this.$emit('hasSelected', false);
      }
    },
  },
};
</script>
