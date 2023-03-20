<template>
  <div class="header__top">
    <div class="header__top-social">
      <a
        v-for="icon in icons"
        :key="icon.id"
        class="header__top-icon"
        :href="icon.target"
        target="_blank"
      >
        <img :src="`/src/assets/icons/${icon.icon}`" height="19" />
      </a>
    </div>
    <div class="header__top-logo">
      <a href=""><img :src="IMG_URL" /></a>
    </div>
    <HeaderSetting />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { IMG_URL } from '@/configs/constants';
import HeaderSetting from './HeaderSetting.vue';

type IconSocial = {
  id: string;
  icon: string;
  target: string;
};

export default defineComponent({
  name: 'HeaderTop',
  components: { HeaderSetting },
  setup() {
    const icons = computed<IconSocial[]>(() => [
      {
        id: '1',
        icon: 'fb.svg',
        target: 'https://www.facebook.com/',
      },
      {
        id: '2',
        icon: 'twitter.svg',
        target: 'https://twitter.com/?lang=vi',
      },
      {
        id: '3',
        icon: 'ins.svg',
        target: 'https://www.instagram.com/',
      },
      {
        id: '4',
        icon: 'linkedin.svg',
        target: 'https://www.linkedin.com/',
      },
    ]);

    return {
      icons,
      IMG_URL,
    };
  },
});
</script>

<style lang="scss" scoped>
@import './HeaderTop.scss';
</style>
