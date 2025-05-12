<template>
  <div class="mo-image-container" :style="containerStyle">
    <img
      v-if="placeholderSrc"
      class="mo-placeholder"
      :src="placeholderSrc"
      :alt="placeholderAlt"
      :width="width"
      :height="height"
    />
    <nuxt-img
      class="mo-img"
      :provider="provider"
      :src="src"
      :width="width"
      :height="height"
      :sizes="sizes"
      :loading="loading"
      :alt="alt"
      @load="isLoaded = true"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  width: {
    type: [Number, String],
    required: true,
  },
  height: {
    type: [Number, String],
    required: true,
  },
  alt: {
    type: String,
    default: "",
  },
  loading: {
    type: String,
    default: "lazy",
  },
  sizes: {
    type: String,
    default: "",
  },
  provider: {
    type: String,
    default: "custom",
  },
  placeholderSrc: {
    type: String,
    default: "",
  },
  placeholderAlt: {
    type: String,
    default: "Loading placeholder",
  },
});

const isLoaded = ref(false);

const aspectRatio = computed(() => {
  return `${props.width}/${props.height}`;
});

const containerStyle = computed(() => {
  return {
    "--aspect-ratio": aspectRatio.value,
  };
});
</script>

<style scoped>
.mo-image-container {
  position: relative;
}

.mo-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  aspect-ratio: var(--aspect-ratio);
  z-index: 0;
}

.mo-placeholder img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.mo-img {
  position: relative;
  z-index: 1;
  width: 100%;
  height: auto;
  aspect-ratio: var(--aspect-ratio);
}
</style>
