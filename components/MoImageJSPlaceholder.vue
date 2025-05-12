<template>
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
    :placeholder="placeholder"
  />
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
placeholder: {
  type: [Boolean, String, Array],
  default: false,
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
</script>
