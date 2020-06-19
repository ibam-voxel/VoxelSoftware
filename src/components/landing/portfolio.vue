<template>
  <div id="portfolio" class="portfolio">
    <div class="container">
      <page-header :title="msg"></page-header>

      <div>
        <slider ref="slider" :options="options">
          <!-- <template slot-scope="coverflow"> -->
            <slideritem
              v-for="(slide, i) in slides"
              :key="i"
              class="single-portfolio"
              :pageLength="slides.length"
            >
              <div class="thumb">
                <img :src="slide.image" alt="Portfolio 1">
              </div>
              <div class="heading">
                <span> {{ slide.title }} </span>
                <h3>
                  <a href="#"> {{ slide.caption }} </a>
                </h3>
              </div>
            </slideritem>
          <!-- </template> -->
        </slider>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '../common/page-header'
// import { Carousel, Slide } from 'vue-carousel'
import { slider, slideritem } from 'vue-concise-slider'
export default {
  data() {
    return {
      msg: 'Portfolio',
      options: {
        currentPage: 0,
        tracking: false,
        thresholdDistance: 100,
        thresholdTime: 300,
        infinite: 3,
        slidesToScroll: 3,
        loop: true,
        pagination: false,
      },
      slides: [
        {
          title: 'Finance Solution',
          caption: 'Consumer Products Consulting',
          image: require('../../assets/images/portfolio-1.jpeg')
        },
        {
          title: 'Finance Solution',
          caption: 'Consumer Products Consulting',
          image: require('../../assets/images/portfolio-2.jpeg')
        },
        {
          title: 'Finance Solution',
          caption: 'Consumer Products Consulting',
          image: require('../../assets/images/portfolio-3.jpeg')
        },
        {
          title: 'Finance Solution',
          caption: 'Consumer Products Consulting',
          image: require('../../assets/images/portfolio-1.jpeg')
        },
        {
          title: 'Finance Solution',
          caption: 'Consumer Products Consulting',
          image: require('../../assets/images/portfolio-2.jpeg')
        },
        {
          title: 'Finance Solution',
          caption: 'Consumer Products Consulting',
          image: require('../../assets/images/portfolio-3.jpeg')
        }
      ]
    }
  },
  components: {
    PageHeader,
    slider,
    slideritem
  }
}
</script>

<style lang="scss" scoped>
.portfolio {
  .container {
    .slider-container {
      z-index: 0;
    }

    .single-portfolio {
      -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.05);
      -moz-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.05);
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.05);
      margin-bottom: 60px;
      -webkit-border-radius: 10px;
      -moz-border-radius: 10px;
      border-radius: 10px;
      overflow: hidden;
      width: calc(100%/3.1);
      align-items: unset;
      margin-right: 1.2%;
      display: initial;
      white-space: normal;
      font-size: inherit;
      justify-content: unset;
      text-align: left;

      &:hover {
        .thumb {
          img {
            width: 100%;
            -webkit-transform: scale(1.05);
            -moz-transform: scale(1.05);
            -ms-transform: scale(1.05);
            transform: scale(1.05);
          }
        }
      }

      .thumb {
        overflow: hidden;
        img {
          width: 100%;
          height: 193px;
          -webkit-transform: scale(1);
          -moz-transform: scale(1);
          -ms-transform: scale(1);
          transform: scale(1);
          -webkit-transition: 0.3s;
          -moz-transition: 0.3s;
          -o-transition: 0.3s;
          transition: 0.3s;
        }
      }

      .heading {
        padding: 25px 29px;
        span {
          color: #919191;
          font-size: 13px;
          font-weight: 400;
        }
        h3 {
          a {
            font-weight: 500;
            color: #001D38;
            font-size: 18px;
            font-family: 'Montserrat', sans-serif;

            &:hover {
              text-decoration: none;
              color: #fdcb5e;
            }
          }
        }
      }
    }
  }
}
</style>