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
        <img :src="getImageUrl(icon.icon)" height="19" />
      </a>
    </div>
    <div class="header__top-logo">
      <a href=""><img :src="getImageUrl(IMG_URL)" /></a>
    </div>
    <HeaderSetting />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

// Configs
import { IMG_URL } from '@/configs/constants';

// Components
import HeaderSetting from './HeaderSetting.vue';

// Mock data
import iconsSocial from '@/mocks/icons-social'

// Helpers
import { getImageUrl } from '@/helpers/functions'

type IconSocial = {
  id: string;
  icon: string;
  target: string;
};

export default defineComponent({
  name: 'HeaderTop',
  components: { HeaderSetting },
  setup() {
    const icons = computed<IconSocial[]>(() => iconsSocial);

    return {
      icons,
      IMG_URL,
      getImageUrl
    };
  },
});
</script>

<style lang="scss" scoped>
@import './HeaderTop.scss';
</style>
