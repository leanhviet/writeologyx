<template>
  <div class="nav-child">
    <div
      v-for="section in routerList"
      :key="section.id"
      class="nav-child__item"
    >
      <div class="nav-child__item-title">{{ section.title }}</div>
      <ul class="nav-child__item-list">
        <li v-for="route in section.children" :key="route.id">
          <router-link
            :class="[
              'nav-child__item-link',
              { 'nav-child__item-url': route.isHasLink },
            ]"
            :to="{ name: route.to }"
            >{{ route.title }}</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

// Mock data
import headerNavChild from '@/mocks/header-nav-child';

type RouterItem = {
  id: string;
  title: string;
  children: RouterItemChildren[];
};

type RouterItemChildren = {
  id: string;
  title: string;
  to: string;
  isHasLink?: boolean;
};

export default defineComponent({
  components: {},
  name: 'HeaderNavChild',
  setup() {
    const routerList = computed<RouterItem[]>(() => headerNavChild);

    return { routerList };
  },
});
</script>

<style lang="scss" scoped>
@import './HeaderNavChild.scss';
</style>
