<template>
  <ul class="header__nav">
    <li v-for="route in routerList" :key="route.id" class="header__nav-item">
      <router-link class="header__nav-link" :to="{ name: route.to }">{{
        route.title
      }}</router-link>
      <ul v-if="route.children" class="header__nav-dropdown">
        <li
          v-for="item in route.children"
          :key="item.id"
          class="header__nav-dropdown-item"
        >
          <router-link
            class="header__nav-dropdown-link"
            :to="{ name: item.to }"
            >{{ item.title }}</router-link
          >
        </li>
      </ul>
      <div v-if="route.isHasComponent" class="header__nav-dropdown">
        <HeaderNavChild />
      </div>
      <font-icon
        v-if="route.children || route.isHasComponent"
        class="header__nav-icon"
        name="mdi-chevron-down"
      />
    </li>
  </ul>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import HeaderNavChild from './HeaderNavChild.vue';
import headerNavs from '@/mocks/header-navs';

type RouterItem = {
  id: string;
  title: string;
  to: string;
  children?: RouterItem[];
  isHasComponent?: boolean;
};

export default defineComponent({
  components: { HeaderNavChild },
  name: 'HeaderNav',
  setup() {
    const routerList = computed<RouterItem[]>(() => headerNavs);

    return { routerList };
  },
});
</script>

<style lang="scss" scoped>
@import './HeaderNav.scss';
</style>
