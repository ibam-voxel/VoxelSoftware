<template>
  <div 
    class="header"
  >
    <b-navbar 
      class="nav-top"
    >
      <div class="container">
        <b-nav-text class="msg-welcome">Welcome to Voxel Software</b-nav-text>
        <b-navbar-nav class="ml-auto">
          <b-nav-text>
            <fa-layer class="fa-fw">
              <fa :icon="['fas', 'envelope']" />
            </fa-layer>
            info@voxelsoftware.co
          </b-nav-text>

          <b-nav-text>
            <fa-layer class="fa-fw">
              <fa :icon="['fas', 'phone-alt']" />
            </fa-layer>
            (024) 321 1234
          </b-nav-text>

        </b-navbar-nav>
        <b-navbar-nav class="social-media-links">
          <b-nav-item>
            <fa-layer class="fa-fw">
              <fa :icon="['fab', 'instagram']" />
            </fa-layer>
          </b-nav-item>

          <b-nav-item>
            <fa-layer class="fa-fw">
              <fa :icon="['fab', 'facebook-f']" />
            </fa-layer>
          </b-nav-item>

          <b-nav-item>
            <fa-layer class="fa-fw">
              <fa :icon="['fab', 'linkedin-in']" />
            </fa-layer>
          </b-nav-item>
        </b-navbar-nav>
      </div>
    </b-navbar>
    <b-navbar 
      toggleable="lg" 
      class="nav-bottom"
      :class="[{'navbar-show': visible}]"
      >
      <div class="container">
        <b-navbar-brand href="#" class="col-xl-3 col-lg-2 col-2">
          <b-img :src="logo"/>
        </b-navbar-brand>

        <b-navbar-toggle class="ml-auto" target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav class="col-xl-6 col-lg-7">
          <!-- Right aligned nav items -->
          <scrollactive class="my-nav">
            <a href="#carousel" class="scrollactive-item" >Home</a>
            <a href="#about-us" class="scrollactive-item" >About</a>
            <a href="#service" class="scrollactive-item" >Services</a>
            <a href="#portfolio" class="scrollactive-item" >Portfolio</a>
            <a href="#contact-us" class="scrollactive-item" >Contact Us</a>
          </scrollactive>
        </b-collapse> 

        <div class="col-xl-3 col-lg-3 d-none d-lg-block">
          <div class="appointment">
            <div class="book-btn">
              <a href="#">Get A Quote</a>
            </div>
          </div>
        </div>
      </div>
    </b-navbar>
  </div>
</template>

<script>
// import IconSvg from '../../assets/images/icon.svg'
export default {
  data() {
    return {
      logo: require('../../assets/images/icon.svg'),
      visible: true,
      lastScrollPosition: 0,
      visibleTop: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      // Get the Current scroll Position
      const currentScrollPosition = window.pageYOffset
      console.log('currentScrollPosition', currentScrollPosition)

      // set visible = true when scrollTop = 0
      if (window.pageYOffset < 60) {
        console.log('inside if 60', window.pageYOffset)
        this.visible = true
        return this.visible
      }

      // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
      if(Math.abs(currentScrollPosition - this.lastScrollPosition) < 100) {
        return
      }

      // Here we determine whether we need to show or hide the navbar

      if(currentScrollPosition < this.lastScrollPosition) {
        this.visible = currentScrollPosition > this.lastScrollPosition
      }

      if(currentScrollPosition > this.lastScrollPosition) {
        this.visible = currentScrollPosition > this.lastScrollPosition
      }

      // Set the current scroll position as the last scroll position
      this.lastScrollPosition = window.pageYOffset
      
    }
  }
}
</script>

<style lang="scss">
  .header {
    position: absolute;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 138px;

    .navbar {
      &.nav-top {
        background-color: white;
        padding: 12px 0;
        height: 52px;
        position: relative;
        width: 100%;
        .msg-welcome {
          font-size: 12px;
          font-family: 'Roboto Thin', sans-serif;
          color: #727272;
        }

        .navbar-nav {
          .navbar-text {
            color: #919191;
            font-size: 13px;
            margin-right: 50px;
            padding: 0;

            .fa-fw {
              margin-right: 7px;
              color: #fdcb5e;
              font-size: 14px;
              top: 3px;
            }
          }

          &.social-media-links {
            .nav-item {
              .nav-link {
                padding: 0;

                .fa-fw {
                  margin-right: 12px;

                  &:hover {
                    color: #fdcb5e;
                    transition: 0.3s;
                  }
                }
              }
            }
          }
        }
      }

      &.nav-bottom {
        // position: fixed;
        z-index: 1;
        width: 100%;
        padding: 18px 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        height: 85px;
        transform: translateY(0);
        transition: 0.1s all ease-out;
        position: fixed;
        top: 0;
        background-color: #675d84;

        &.navbar-show {
          position: relative;
          background-color: transparent;
        }

        &.navbar-sticky {
          display: none;
        }

        .navbar-brand {
          padding: 0;
          top: -4px;
          img {
            width: 55px;
            height: auto;
          }
        }

        .my-nav {
          .scrollactive-item {
            margin-right: 10px;
            color: white;
            font-family: 'Montserrat', sans-serif;
            width: 100%;
            position: relative;
            padding: 0;

            &::before {
              position: absolute;
              content: "";
              background: #fdcb5e;
              width: 100%;
              height: 3px;
              bottom: -33px;
              left: 0;
              opacity: 0;
              transform: scaleX(0);
              -webkit-transition: 0.3s;
              -moz-transition: 0.3s;
              -o-transition: 0.3s;
              transition: 0.3s;
            }

            &.is-active {
              &::before {
                opacity: 1;
                transform: scaleX(1);
              }
            }

            &:hover {
              text-decoration: none;
              &::before {
                opacity: 1;
                transform: scaleX(1);
              }
            }
          }
        }

        .appointment {
          .book-btn {
            text-align: right;
            a {
              background: #ffbd30;
              background: -moz-linear-gradient(left,  rgb(255, 189, 48) 0%, rgb(252, 218, 143) 100%);
              background: -webkit-linear-gradient(left,  rgb(255, 189, 48) 0%, rgb(252, 218, 143) 100%);
              background: linear-gradient(to right,  rgb(255, 189, 48) 0%, rgb(252, 218, 143) 100%);
              filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffbd2e', endColorstr='#fcda8f',GradientType=1 );
              padding: 13px 26px;
              font-size: 14px;
              font-weight: 400;
              border: 1px solid transparent;
              color: #fff;
              -webkit-border-radius: 30px;
              -moz-border-radius: 30px;
              border-radius: 30px;
              font-family: 'Montserrat', sans-serif;

              &:hover {
                text-decoration: none;
                background: -moz-linear-gradient(right, rgba(255, 189, 48, 0.96) 0%, rgba(252, 218, 143, 0.96) 100%);
                background: -webkit-linear-gradient(right, rgba(255, 189, 48, 0.96) 0%, rgba(252, 218, 143, 0.96) 100%);
                background: linear-gradient(to left, rgba(255, 189, 48, 0.96) 0%, rgba(252, 218, 143, 0.96) 100%);
                color: #fff;
                border: 1px solid #fcda8f;
              }
            }
          }
        }

        &.navbar-hidden {
          position: relative;
        }
      }
    }

    @media screen and (max-width: 991px) {
      .navbar {
        &.nav-top {
          display: none;
        }

        &.nav-bottom {
          top: 0;

          .navbar-collapse {
            .navbar-nav {
              background: white;
              .nav-item {
                .nav-link {
                  color: black;
                  padding: 5px 10px;
                  margin: 2px 5px;

                  &.active {
                    color: #ffbd30;
                  }

                  &::before {
                    opacity: 0;
                  }
                }
              }
            }
          }
        }

        .navbar-toggler {
          border: 0;

          &:focus {
            outline: none;
          }

          .navbar-toggler-icon {
            background-image: url('../../assets/images/bars.svg');
          } 
        }
      }
    }
  }
</style>

