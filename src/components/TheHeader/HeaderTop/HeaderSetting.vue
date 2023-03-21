<template>
  <div class="header__top-setting">
    <div class="header__top-cart" @click="isShowCartModal = true">
      Cart {{ `(${totalItemCarts})` }}
    </div>
    <div class="header__top-account">
      <img src="/src/assets/icons/user.svg" />
      <font-icon class="header__top-account-down" name="mdi-chevron-down" />
      <div class="header__top-account-list">
        <div class="header__top-account-item">Login</div>
        <div class="header__top-account-item">Account</div>
      </div>
    </div>
    <div class="header__top-search" @click="isShowSearchModal = true">
      <img src="/src/assets/icons/search.svg" height="24" />
    </div>
  </div>
  <SearchModal v-if="isShowSearchModal" :on-close="onCloseSearchModal" />
  <CartModal v-if="isShowCartModal" :on-close="onCloseCartModal" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

// Components
import SearchModal from '@/components/SearchModal/SearchModal.vue';
import CartModal from '@/components/CartModal/CartModal.vue';

export default defineComponent({
  name: 'HeaderSetting',
  components: { SearchModal, CartModal },
  setup() {
    const totalItemCarts = ref<number>(0);
    const isShowSearchModal = ref<boolean>(false);
    const isShowCartModal = ref<boolean>(false);

    const onCloseSearchModal = (): void => {
      isShowSearchModal.value = false;
    };

    const onCloseCartModal = (): void => {
      isShowCartModal.value = false;
    };

    return {
      totalItemCarts,
      isShowSearchModal,
      isShowCartModal,
      onCloseSearchModal,
      onCloseCartModal,
    };
  },
});
</script>

<style lang="scss" scoped>
@import './HeaderSetting.scss';
</style>
