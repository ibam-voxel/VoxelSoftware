<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6 col-12">
          <h2 class="logo">
            <a href="#">
              <b-img :src="logo" alt="Logo"></b-img>
            </a>
          </h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          <b-list-group horizontal>
            <b-list-group-item>
              <a href="#">
                <fa-layer class="fa-fw">
                  <fa :icon="['fab', 'instagram']" />
                </fa-layer>
              </a>
            </b-list-group-item>

            <b-list-group-item>
              <a href="#">
                <fa-layer class="fa-fw">
                  <fa :icon="['fab', 'facebook-f']" />
                </fa-layer>
              </a>
            </b-list-group-item>

            <b-list-group-item>
              <a href="#">
                <fa-layer class="fa-fw">
                  <fa :icon="['fab', 'linkedin-in']" />
                </fa-layer>
              </a>
            </b-list-group-item>
          </b-list-group>
        </div>

        <div class="col-lg-3 col-md-6 col-12">
          <h2>Services</h2>
          <b-list-group class="service">
            <b-list-group-item>
              <a href="#">
                <fa-layer class="fa-fw">
                  <fa :icon="['fas', 'check']" />
                </fa-layer>
                Business Solutions
              </a>
            </b-list-group-item>

            <b-list-group-item>
              <a href="#">
                <fa-layer class="fa-fw">
                  <fa :icon="['fas', 'check']" />
                </fa-layer>
                Coorporate Landing Page
              </a>
            </b-list-group-item>
          </b-list-group>
        </div>

        <div class="col-lg-3 col-md-6 col-12">
          <h2>Contact Information</h2>
          <b-list-group class="contact">
            <b-list-group-item>
              <fa-layer class="fa-fw">
                <fa :icon="['fas', 'map-marker-alt']" />
              </fa-layer>
              <span>Jl. Satrio Wibowo III No. 69, Kota Semarang, Jawa Tengah</span>
            </b-list-group-item>

            <b-list-group-item>
              <a href="#">
                <fa-layer class="fa-fw">
                  <fa :icon="['fas', 'phone-alt']" />
                </fa-layer>
                <span >(024) 321 1234</span>
              </a>
            </b-list-group-item>

            <b-list-group-item>
              <a href="#">
                <fa-layer class="fa-fw">
                  <fa :icon="['fas', 'location-arrow']" />
                </fa-layer>
                <span>hrd@voxelsoftware.co</span>
              </a>
            </b-list-group-item>
          </b-list-group>
        </div>

        <div class="col-lg-3 col-md-6 col-12">
          <h2>Business Hours</h2>
          <div class="opening-hours">
            <h4>Opening Days</h4>
            <p>Monday - Friday : 9am to 17pm</p>
            <h4>Vacations</h4>
            <p>All Saturday Sunday Days All Official Holidays </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logo: require('../../assets/images/icon.svg')
    }
  }
}
</script>

<style lang="scss" scoped>
  .footer {
    background: #252525;
    overflow: hidden;
    padding: 7em 0;
    .container {
      .row {

        @media screen and (max-width: 1023px) {
          
        }

        .col-md-6 {
          .logo {
            margin-bottom: 30px;
            img {
              width: 50px;
            }
          }
          h2 {
            font-weight: normal;
            color: #fff;
            margin-bottom: 40px;
            font-size: 20px;
            font-weight: 600;
            line-height: 30px;
          }

          h4 {
            color: gray;
            font-size: 12px;
            text-transform: uppercase;
            font-weight: 700;
          }

          p {
            color: white;
            font-family: 'Montserrat', sans-serif;
          }

          a {
            color: white;
            text-decoration: none;
            font-size: 14px;
            line-height: 14px;
            font-family: 'Montserrat', sans-serif;
          }

          span {
            font-family: 'Montserrat', sans-serif;
          }

          .opening-hours {
            p {
              padding-left: 1rem;
            }
          }
          
          .list-group {

            &.list-group-horizontal {
              margin-top: 1.5rem;
              margin-bottom: 1rem;
              height: 48px;

              .list-group-item {
                padding: 0;
                margin-right: 10px;

                a {
                  height: 40px;
                  width: 40px;
                  display: block;
                  float: left;
                  background: rgba(255, 255, 255, 0.05);
                  border-radius: 50%;
                  position: relative;
                  transition: .3s;
                  line-height: 20px;

                  &:hover {
                    .fa-fw {
                      color: #f79f24;
                    }
                  }

                  .fa-fw {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    -webkit-transform: translate(-50%, -50%);
                    -ms-transform: translate(-50%, -50%);
                    transform: translate(-50%, -50%);
                  }
                }
              }
            }

            &.service {
              .list-group-item {
                a {
                  padding: 0.25rem 0;

                  &:hover {
                    color: #f79f24;
                    .fa-fw {
                      color: #f79f24;
                    }
                  }

                  .fa-fw {
                    font-weight: 400;
                    margin-right: 1rem;
                  }
                }
              }
            }

            &.contact {
              .list-group-item {
                display: table-cell;
                vertical-align: top;

                a {
                  display: table-cell;
                }
                .fa-fw {
                  width: 40px;
                  font-size: 18px;
                  padding-top: 2px;
                  display: table-cell;
                  vertical-align: top;

                  svg {
                    top: 0;
                    bottom: auto;
                    left: 0;
                    right: auto;
                  }
                }

                span {
                  display: table-cell;
                }
              }
            }

            .list-group-item {
              background-color: transparent;
              color: white;
              padding: .75rem 0;
              border: 0;
              .fa-fw {
                color: white;
              }
            }
          }
        }
      }
    }
  }
</style>