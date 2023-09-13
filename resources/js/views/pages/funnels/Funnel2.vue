<template>
  <div class="mx-auto pt-8">
    <div class="text-white">
      <h2 class="cb-header mb-10 mt-5">Select problem areas</h2>
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
        <div class="flex items-center text-sm lg:text-xl">
          <div class="border-1 mr-3 h-5 w-5 border border-solid p-0.5">
            <img v-if="val.selected" :src="check" />
          </div>
          <span class="w-4/12 lg:w-full">{{ val.label }}</span>
        </div>
        <img :src="val.img" class="h-inherit absolute right-0" />
      </div>
    </div>
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
          label: 'Loose skin on thighs and legs',
          img: '/images/city-beauty-funnels/pg-2-thighs.png',
          selected: false,
        },
        {
          label: 'Thinning skin on arms',
          img: '/images/city-beauty-funnels/pg-2-thin-arms.png',
          selected: false,
        },
        {
          label: 'Loose neck/jaw',
          img: '/images/city-beauty-funnels/pg-2-loose-neck.png',
          selected: false,
        },
        {
          label: 'Saggy belly',
          img: '/images/city-beauty-funnels/pg-2-saggy-belly.png',
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
