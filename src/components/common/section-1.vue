<template>
  <div class="section-1 overlay">
    <div class="text-center">
      <div class="quote">
        <img :src="quote" alt="Quote">
      </div>
      <p>"Make a strong relation, tackle challenges and produce good product."</p>
      <div class="author">
        <div class="thumbs">
          <img :src="avatar" alt="Avatar">
        </div>
        <h3>Voxel Software</h3>
        <span>Business Owner</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quote: require('../../assets/images/quote.svg'),
      avatar: require('../../assets/images/avatar.png')
    }
  }
}
</script>

<style lang="scss" scoped>
  .section-1 {
    background-image: url('../../assets/images/section-1.jpeg');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: relative;
    padding: 142px 0 137px 0;
    z-index: 0;

    &.overlay {
      &::before {
        position: absolute;
        content: "";
        background-color: #001D38;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: .5;
        z-index: -1;
      }
    }


    .text-center {

      .quote {
        img {
          width: 47px;
          transform: rotate(180deg);
        }
      }

      p {
        color: #fff;
        font-weight: 400;
        font-size: 20px;
        line-height: 32px;
        margin: 34px 0;
        font-family: 'Montserrat', sans-serif;
      }

      .author {
        .thumbs {
          width: 42px;
          height: 42px;
          -webkit-border-radius: 50%;
          -moz-border-radius: 50%;
          border-radius: 50%;
          margin: auto auto 15px auto;
        }

        h3 {
          color: #fff;
          font-size: 15px;
          font-weight: 500;
          margin-bottom: 5px;
          font-family: 'Montserrat', sans-serif;
        }

        span {
          font-size: 13px;
          font-weight: 400;
          color: #fff;
          font-family: 'Roboto Thin', sans-serif;
        }
      }
    }
  }
</style>