<template>
  <div id="app">
    <nav-header/>
    <Carousel />
    <about-us />
    <section-one />
    <Service />
    <Portfolio />
    <contact-us />
    <Footer />
  </div>
</template>

<script>
import NavHeader from './components/navigation/nav-header'
import Carousel from './components/landing/carousel'
import Service from './components/landing/service'
import AboutUs from './components/landing/about-us'
import SectionOne from './components/common/section-1'
import Portfolio from './components/landing/portfolio'
import ContactUs from './components/landing/contact-us'
import Footer from './components/navigation/footer'

export default {
  name: 'App',
  components: {
    NavHeader,
    Carousel,
    Service,
    AboutUs,
    SectionOne,
    Portfolio,
    ContactUs,
    Footer
  }
}
</script>

<style lang="scss">
// @import '../assets/styles/app.scss';


</style>
