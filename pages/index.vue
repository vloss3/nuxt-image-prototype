<template>
  <div>
    <h1>Srcset example sizes="sm:438px md:675px lg:900px"</h1>
    <div class="image-container-srcset">
      <MoImageCSSPlaceholder
        src="photo-1461988320302-91bde64fc8e4"
        width="900"
        height="599"
        sizes="sm:438px md:675px lg:900px"
        alt="Example landscape"
      />

      <MoImageCSSPlaceholder
        src="photo-1746950862687-3017c5818710"
        width="1920"
        height="1080"
        sizes="sm:1280px md:1600px lg:1920px"
        alt="Example landscape"
      />
    </div>
  </div>
</template>

<style>
.image-container-srcset {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}
</style>
