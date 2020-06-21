<template>
  <div class="wrapper">
    <Nav />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Nav from '../components/Nav'
import Footer from '../components/Footer'
export default {
  components: {
    Nav, Footer
  }
}
</script>

<style>


html, body {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  height: 100%;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

</style>
