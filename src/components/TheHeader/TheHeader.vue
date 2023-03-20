<template>
  <div class="header">
    <v-container>
      <HeaderTop />
      <HeaderNav />
    </v-container>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { IMG_URL } from '@/configs/constants';
import HeaderTop from './HeaderTop/HeaderTop.vue';
import HeaderNav from './HeaderNav/HeaderNav.vue';
import iconsSocial from '@/mocks/icons-social';

type IconSocial = {
  id: string;
  icon: string;
  target: string;
};

export default defineComponent({
  name: 'TheHeader',
  components: { HeaderNav, HeaderTop },
  setup() {
    const icons = computed<IconSocial[]>(() => iconsSocial);

    return { icons, IMG_URL };
  },
});
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
