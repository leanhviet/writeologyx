<template>
  <div class="search-modal">
    <div class="search-modal__wrapper" data-aos="fade-up">
      <font-icon
        class="search-modal__wrapper-icon"
        size="30"
        name="mdi-close"
        @click="props.onClose"
      />
      <div class="search-modal__wrapper-title">Search for articles</div>
      <v-text-field
        v-model="searchValue"
        class="search-modal__wrapper-input"
        placeholder="Search..."
        variant="outlined"
      />
      <v-btn
        class="search-modal__wrapper-button"
        :loading="isLoading"
        :disabled="isDisabled || isLoading"
        color="#131313"
        width="100%"
        @click="onSearch"
      >
        Search
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue';

export default defineComponent({
  name: 'SearchModal',
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

    const onSearch = (): void => {
      //TODO: Handle search value
    };

    return {
      props,
      searchValue,
      isDisabled,
      isLoading,
      onSearch,
    };
  },
});
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
