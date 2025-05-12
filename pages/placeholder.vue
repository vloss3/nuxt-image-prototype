<template>
  <div class="image-container">
    <h2>SVG placeholder using CSS</h2>
      <MoImageCSSPlaceholder
        src="photo-1461988320302-91bde64fc8e4"
        width="900"
        height="599"
        sizes="sm:438px md:675px lg:900px"
        alt="Example landscape"
        placeholderSrc="/images/placeholder.svg"
      />
      <MoImageCSSPlaceholder
        src="photo-1746950862687-3017c5818710"
        width="1920"
        height="1080"
        sizes="sm:1280px md:1600px lg:1920px"
        alt="Example landscape"
        placeholderSrc="/images/placeholder.svg"
      />
  </div>
</template>

<style scoped>
.image-container {
  max-width: 900px;
}
</style>
