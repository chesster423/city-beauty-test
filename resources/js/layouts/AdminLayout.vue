<template>
  <div id="main-body" class="leading-normal tracking-normal">
    <div class="flex flex-wrap">
      <AdminSidebar :class="fullScreenSideBarOpen ? '' : 'lg:hidden'" />
      <div
        id="main-content"
        class="min-h-screen w-full bg-white pl-0 dark:bg-slate-800"
        :class="
          (sideBarOpen ? 'overlay ' : ' ') +
          (fullScreenSideBarOpen ? 'lg:pl-64' : '')
        "
      >
        <AdminNavBar />
        <div class="mb-20 bg-white dark:bg-slate-800">
          <router-view />
        </div>
        <!-- <AppFooter
          class="sticky top-[100vh] w-full"
          footer-class="border-slate-900/5 dark:border-slate-700"
          border-class=""
        /> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import AdminNavBar from '@components/admin/AdminNavBar.vue';
import AdminSidebar from '@components/admin/AdminSidebar.vue';
import AppFooter from '@components/AppFooter.vue';

export default {
  name: 'AdminLayout',
  components: {
    AdminNavBar,
    AdminSidebar,
    AppFooter,
  },
  props: {},
  setup() {
    return {};
  },
  data() {
    return {
      //
    };
  },
  computed: {
    ...mapState('sidebar', {
      sideBarOpen: (state) => state.sideBarOpen,
      fullScreenSideBarOpen: (state) => state.fullScreenSideBarOpen,
    }),
  },
  watch: {},
  created() {},
  mounted() {},
  beforeUnmount() {},
  updated() {},
  methods: {},
};
</script>

<style scoped></style>
<style lang="scss" scoped></style>
