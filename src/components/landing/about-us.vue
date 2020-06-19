<template>
  <div id="about-us" class="about-us">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6 col-12 d-flex">
          <div class="img"></div>
        </div>

        <div class="col-sm-6 col-12">
          <div class="justify-content-start">
            <span class="subheading">
              Welcome to VoxelSoftware
            </span>

            <h2>We help accounting work on your business more easily and quickly</h2>

            <h4>What they are ?</h4>

            <p>memudahkan dalam pengolahan data, transaksi pada kasir juga lebih mudah dilakukan dan dimonitor, purchase request hingga purchase order dapat dilakukan dengan mudah dan cepat, sehingga produktifitas kerja akan lebih meningkat dan masih banyak lagi fitur vobis yang dapat memudahkan pekerjaan bisnis anda.</p>

            <p>Smart business is a business that can do data and financial processing well, that is easy, fast, and precise.</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
  .about-us {
    background-color: #f8f9fd;
    .container-fluid {
      .row {
        .col-sm-6 {

          &:first-child {
            padding-left: 0;
          }

          .img {
            background-image: url('../../assets/images/about-us.jpeg');
            width: 100%;
            height: 100%;
            background-size: cover;
          }

          .justify-content-start {
            padding-top: 3rem;
            padding-bottom: 3rem;
            .subheading {
              font-size: 12px;
              display: block;
              font-weight: 700;
              color: #f79f24;
              text-transform: uppercase;
              letter-spacing: 2px;
              font-family: "Montserrat", sans-serif;
            }

            h2 {
              font-size: 24px;
              font-weight: 700;
            }

            p {
              font-family: "Roboto Thin", sans-serif;
              font-size: 14px;
              line-height: 1.8;
              font-weight: 400;
              color: gray;
            }

            .tabs {
              .nav-tabs {
                border: 0;

                .nav-item {
                  margin-right: 10px;

                  .nav-link {
                    border: 0;
                    border-radius: 4px;
                    background: #ffffff;
                    color: #000000;
                    font-weight: 600;
                    -webkit-box-shadow: 0px 9px 21px -16px rgba(0, 0, 0, 0.15);
                    -moz-box-shadow: 0px 9px 21px -16px rgba(0, 0, 0, 0.15);
                    box-shadow: 0px 9px 21px -16px rgba(0, 0, 0, 0.1);

                    &:focus {
                      outline: none;
                    }

                    &.active {
                      color: #fff;
                      background: #675d84;
                    }
                  }
                }
              }

              .tab-content {
                background: #fff;
                padding: 20px;
                -webkit-box-shadow: 0px 9px 21px -16px rgba(0, 0, 0, 0.15);
                -moz-box-shadow: 0px 9px 21px -16px rgba(0, 0, 0, 0.15);
                box-shadow: 0px 9px 21px -16px rgba(0, 0, 0, 0.1);
                margin-top: 0.5rem;
                margin-right: 10px;

                p {
                  font-family: "Montserrat", sans-serif;
                }
              }
            }
          }
        }
      }
    }
  }
</style>