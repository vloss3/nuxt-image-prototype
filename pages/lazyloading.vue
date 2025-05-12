<template>
  <h1>Lazy loading example</h1>
  <div class="empty-viewport">
    200vh
  </div>
  <div class="image-container-lazy">
    <MoImageCSSPlaceholder
      src="photo-1461988320302-91bde64fc8e4"
      width="900"
      height="599"
      sizes="sm:438px md:675px lg:900px"
      alt="Example landscape"
      placeholderSrc="/images/placeholder.svg"
      loading="lazy"
    />
    <MoImageCSSPlaceholder
      src="photo-1461988320302-91bde64fc8e4"
      width="900"
      height="599"
      sizes="sm:438px md:675px lg:900px"
      alt="Example landscape"
      placeholderSrc="/images/placeholder.svg"
      loading="lazy"
    />
    <MoImageCSSPlaceholder
      src="photo-1461988320302-91bde64fc8e4"
      width="900"
      height="599"
      sizes="sm:438px md:675px lg:900px"
      alt="Example landscape"
      placeholderSrc="/images/placeholder.svg"
      loading="lazy"
    />
  </div>
</template>

<style>
.empty-viewport {
  width: 100vw;
  height: 200vh;
}

.image-container-lazy {
  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
