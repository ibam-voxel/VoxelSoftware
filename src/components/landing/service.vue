<template>
  <div id="service" class="service">
    <div class="container">
      <page-header :title="msg"></page-header>
      <div class="row">
        <div class="col-12 col-sm-6">
          <div class="single-service text-center">
            <div class="service-icon">
              <img :src="money" alt="Hand Money">
            </div>
            <h3>Busniess Solutions</h3>
            <p>PWA will replace more than 50% of existing mobile apps by the end of 2020. Voxel Software is capable to develop a mobile-enabled web apps. Our rich industry knowledge allows us to deliver solutions that solve business challenges in retail, manufacture, food & bistro.</p>
            <a href="#">Learn More</a>
          </div>
        </div>

        <div class="col-12 col-sm-6">
          <div class="single-service text-center">
            <div class="service-icon">
              <img :src="agreement" alt="Agreement">
            </div>
            <h3>Coorporate Landing Page</h3>
            <p>We are convinced that a professionally developed landing page can offer impressive online presence for your company. Besides ey-catching look, creative and clean design, Voxel Software will provide you with a landing page that is fully optimized for various search engine.</p>
            <a href="#">Learn More</a>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '../common/page-header'
export default {
  data() {
    return {
      money: require('../../assets/images/money.svg'),
      agreement: require('../../assets/images/agreement.svg'),
      msg: 'What we Do?'
    }
  },
  components: {
    PageHeader
  }
  
}
</script>

<style lang="scss" scoped>
  .service {
    padding-top: 100px;
    padding-bottom: 70px;

    .container {
      .row {
        .col-sm-6 {
          &:first-child {
            .single-service {
              .service-icon {
                background: #615cfd;
                background: -moz-linear-gradient(top, #615cfd 0%, #d465ef 100%);
                background: -webkit-linear-gradient(top, #615cfd 0%, #d465ef 100%);
                background: linear-gradient(to bottom, #615cfd 0%, #d465ef 100%);
                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#615cfd', endColorstr='#d465ef',GradientType=0 );
              }
            }
          }

          &:last-child {
            .single-service {
              .service-icon {
                background: #fd8e5e;
                background: -moz-linear-gradient(top, #fd8e5e 0%, #fd8e5e 100%);
                background: -webkit-linear-gradient(top, #fd8e5e 0%, #fd8e5e 100%);
                background: linear-gradient(to bottom, #fd8e5e 0%, #fd8e5e 100%);
                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fd8e5e', endColorstr='#fd8e5e',GradientType=0 );
              }
            }
          }

          .single-service {
            padding: 30px;
            border: 1px solid #E8E8E8;
            -webkit-transition: 0.3s;
            -moz-transition: 0.3s;
            -o-transition: 0.3s;
            transition: 0.3s;
            margin-bottom: 30px;

            &:hover {
              box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04);
              border-color: transparent;
            }

            .service-icon {
              line-height: 94px;
              text-align: center;
              width: 98px;
              height: 98px;
              margin: auto;
              border-radius: 50%;

              img {
                width: 35px;
                height: 40px;
              }
            }

            h3 {
              font-size: 22px;
              color: #001D38;
              font-weight: 300;
              margin-top: 35px;
              margin-bottom: 23px;
              font-family: "Montserrat", sans-serif;
            }

            p {
              font-size: 15px;
              font-weight: 400;
              color: #727272;
              line-height: 28px;
              margin-bottom: 6px;
              font-family: 'Roboto Thin', sans-serif;
            }

            a {
              color: #5DB2FF;
              font-weight: 400;
              font-size: 15px;
              font-family: 'Roboto Thin';

              &:hover {
                text-decoration: none;
              }
            }
          }
        } 
      }
    }
  }
</style>