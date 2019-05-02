<template>
	<div>
    <section class="full-height hello">
      <div class="container center">
  			<h1>Hello world!</h1>
        <div class="arrow-down container">
          <coffee />
        </div>
			</div>
		</section>
	</div>
</template>

<script>
import Coffee from '~/node_modules/@fortawesome/fontawesome-free/svgs/solid/coffee.svg'

export default {
  components: {
    Coffee
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/stylesheets/_variables.scss';

.hello {
  position: relative;

  .arrow-down {
    position: absolute;
    bottom: 3%;

    svg {
      max-height: 25px;
      fill: $black;
      animation: sweel 1s linear infinite alternate;
    }
  }
}

@keyframes sweel {
  to {
    transform: scale(1.25);
  }
}
</style>
