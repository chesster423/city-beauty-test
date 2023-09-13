<template>
  <div class="mx-auto pt-8">
    <div class="text-white">
      <label>Ok, so your goal is to remove crepey skin</label>

      <h2 class="cb-header mb-10 mt-5">Choose the skin you want</h2>
    </div>

    <div class="grid gap-4">
      <div
        v-for="(val, key) in options"
        :key="key"
        class="option-container relative flex grid cursor-pointer grid-cols-2 items-center px-5"
        :class="{ selected: val.selected }"
        @click="setSkin(val)"
      >
        <label class="text-sm lg:text-xl">{{ val.label }}</label>
        <img :src="val.img" class="h-inherit absolute right-0" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Funnel1',
  components: {},
  props: {},
  data() {
    return {
      options: [
        {
          label: 'Firm Skin',
          img: '/images/city-beauty-funnels/pg-1-firm-skin.png',
          selected: false,
        },
        {
          label: 'Firm, Wrinkle-Free Skin',
          img: '/images/city-beauty-funnels/pg-1-wrinkle-free.png',
          selected: false,
        },
      ],
    };
  },
  computed: {},
  mounted() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  },
  methods: {
    setSkin(val) {
      Object.keys(this.options).forEach((v) => {
        this.options[v].selected = false;
      });
      val.selected = true;
      this.$emit('hasSelected', true);
    },
  },
};
</script>
