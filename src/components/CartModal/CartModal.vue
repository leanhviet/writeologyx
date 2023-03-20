<template>
  <div class="cart-modal">
    <div class="cart-modal__wrapper" data-aos="zoom-in">
      <div class="cart-modal__wrapper-header">
        <div class="cart-modal__wrapper-title">Your Cart</div>
        <font-icon
          class="cart-modal__wrapper-icon"
          size="30"
          name="mdi-close"
          @click="props.onClose"
        />
      </div>

      <div class="cart-modal__wrapper-empty">
        <div class="cart-modal__wrapper-title">No items found.</div>
        <v-btn
          class="cart-modal__wrapper-button"
          :loading="isLoading"
          :disabled="isDisabled || isLoading"
          color="#131313"
          @click="onSubscribes"
        >
          Subscribe now!
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue';

export default defineComponent({
  name: 'CartModal',
  components: {},
  props: {
    onClose: {
      type: Function as PropType<void>,
      required: true,
    },
  },
  setup(props) {
    const searchValue = ref<string>('');
    const isDisabled = ref<boolean>(false);
    const isLoading = ref<boolean>(false);

    const onSubscribes = (): void => {
      //TODO: Handle search value
    };

    return {
      props,
      searchValue,
      isDisabled,
      isLoading,
      onSubscribes,
    };
  },
});
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
