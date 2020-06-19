<template>
  <div id="carousel">
    <carousel
      :autoplay="true"
      :perPage="1"
      :perPageCustom="[[1024, 1] [768, 1]]"
      :paginationEnabled="false"
      :loop="true"
      :autoplayTimeout="3000"
    >
      <slide class="overlay img-carousel-1 d-flex">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="slider-text">
                <h3>
                  Big Opportunity
                  <br>
                  For Your Business
                </h3>
                <div class="btn-service">
                  <b-link class="boxed-btn">Our Service</b-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </slide>
      <slide class="overlay img-carousel-2 d-flex">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="slider-text">
                <h3>
                  Big Opportunity
                  <br>
                  For Your Business
                </h3>
                <div class="btn-service">
                  <b-link class="boxed-btn">Our Service</b-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </slide>
      <slide class="overlay img-carousel-3 d-flex">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="slider-text">
                <h3>
                  Big Opportunity
                  <br>
                  For Your Business
                </h3>
                <div class="btn-service">
                  <b-link class="boxed-btn">Our Service</b-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
  import { Carousel, Slide } from 'vue-carousel'
  export default {
    data() {
      return {
        slide: 0,
        sliding: null,
        carousel1: require('../../assets/images/carousel-1.jpeg'),
        carousel2: require('../../assets/images/carousel-2.jpeg'),
        carousel3: require('../../assets/images/carousel-3.jpeg')
      }
    },
    components: {
      Carousel,
      Slide
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .VueCarousel {
    .VueCarousel-slide {
      width: 100%;
      height: 750px;
    }
    .overlay {
      position: relative;
      z-index: 0;
      &::before {
        position: absolute;
        content: "";
        background-color: #001D38;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        opacity: 0.4;
      }
    }

    .img-carousel-1 {
      background-size: cover;
      background-position: center;
      background-image: url('../../assets/images/carousel-1.jpeg');
    }

    .img-carousel-2 {
      background-size: cover;
      background-position: center;
      background-image: url('../../assets/images/carousel-2.jpeg');
    }

    .img-carousel-3 {
      background-size: cover;
      background-position: center;
      background-image: url('../../assets/images/carousel-3.jpeg');
    }


    .container {
      align-self: center;

      .row {
        .slider-text {
          position: relative;

          @media screen and (max-width: 767px) {
            h3 {
              font-size: 30px !important;
              line-height: 45px !important;
            }
          }
          h3 {
            font-family: "Roboto Thin", sans-serif;
            font-size: 60px;
            text-transform: capitalize;
            letter-spacing: 2px;
            font-weight: 300;
            line-height: 76px;
            margin-bottom: 15px;
            color: #fff;
          }

          .btn-service {
            .boxed-btn {
              background: -moz-linear-gradient(to bottom, rgb(255, 189, 48) 0%, rgb(252, 218, 143) 100%);
              background: -webkit-linear-gradient(to bottom, rgb(255, 189, 48) 0%, rgb(252, 218, 143) 100%);
              background: linear-gradient(to bottom, rgb(255, 189, 48) 0%, rgb(252, 218, 143) 100%);
              filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#FFBD30', endColorstr='#FCDA8F',GradientType=0 );
              color: #fff;
              display: inline-block;
              padding: 19px 41px;
              font-family: "Montserrat", sans-serif;
              font-size: 15px;
              font-weight: 500;
              border: 0;
              -webkit-border-radius: 30px;
              -moz-border-radius: 30px;
              border-radius: 30px;
              text-align: center;
              color: #fff !important;
              text-transform: capitalize;
              -webkit-transition: 0.3s;
              -moz-transition: 0.3s;
              -o-transition: 0.3s;
              transition: 0.3s;
              cursor: pointer;

              &:hover {
                text-decoration: none;
                background: -moz-linear-gradient(to left, rgba(255, 189, 48, 0.96) 0%, rgba(252, 218, 143, 0.96) 100%);
                background: -webkit-linear-gradient(to left, rgba(255, 189, 48, 0.96) 0%, rgba(252, 218, 143, 0.96) 100%);
                background: linear-gradient(to left, rgba(255, 189, 48, 0.96) 0%, rgba(252, 218, 143, 0.96) 100%);
              }
            }
          }
        }
      }
    }
  }
</style>