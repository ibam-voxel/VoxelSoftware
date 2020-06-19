<template>
  <div id="contact-us" class="contact-us">
    <div class="overlay"></div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6 col-md-12 col-sm-12 col-12">
          <div class="justify-content-start">
            <span class="subheading">Booking an Appointment</span>
            <h2>Free Consultation</h2>

            <b-form @submit="onSubmit">
              <div class="row">
                <div class="col-12">
                  <v-select
                    class="select"
                    placeholder='Select Service'
                    :options="services" />
                </div>

                <div class="col-6">
                  <b-form-group id="emails" label-for="email">
                    <b-form-input
                      id="email"
                      v-model="form.email"
                      type="email"
                      required
                      placeholder="Enter email"
                    ></b-form-input>
                  </b-form-group>
                </div>

                <div class="col-6">
                  <b-form-group id="names" label-for="name">
                    <b-form-input
                      id="name"
                      v-model="form.name"
                      required
                      placeholder="Enter name"
                    ></b-form-input>
                  </b-form-group>
                </div>

                <div class="col-6">
                  <date-picker
                    v-model="form.date"
                    format="YYYY-MM-DD"
                    type="date"
                    placeholder="Date"
                    class="form-group"/>
                </div>

                <div class="col-6">
                  <date-picker 
                    v-model="form.time"
                    format="hh:mm a"
                    type="time"
                    placeholder="Time"
                    class="form-group"/>
                </div>

                <div class="col-12">
                  <b-form-textarea
                    id="textarea"
                    v-model="form.message"
                    placeholder="Message"
                    rows="7"
                    no-resize />
                </div>

                <div class="col-12">
                  <b-button type="submit" variant="dark">Send Message</b-button>
                </div>
              </div>
            </b-form>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12 col-12">
          <b-img :src="image" alt="Image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'

export default {
  data() {
    return {
      form: {
        email: '',
        name: '',
        service: null,
        date: '',
        time: '',
        message: ''
      },
      services: ['Busniess Solution', 'Coorporate Landing Page'],
      image: require('../../assets/images/contact-us.jpeg')
    }
  },
  components: {
    DatePicker
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.service = null
      this.form.data = ''
      this.form.time = ''
      this.form.message = ''
      // Trick to reset/clear native browser form validation state
      // this.show = false
      // this.$nextTick(() => {
      //   this.show = true
      // })
    }
  }
}
</script>

<style lang="scss">
  .contact-us {
    position: relative;
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 50%;
      content: '';
      opacity: 1;
      background: #f79f24;
    }
    .container-fluid {
      .row {
        .col-sm-12 {
          overflow: hidden;

          @media screen and (max-width: 768px) {
            &:last-child {
              display: none;
            }
          }

          &:first-child {
            padding-top: 3rem;
            padding-bottom: 3rem;
            padding-left: 1rem;
            padding-right: 3rem;
          }

          &:last-child {
            padding: 0;
          }

          .justify-content-start {
            .subheading {
              font-size: 12px;
              display: block;
              font-weight: 700;
              font-family: 'Montserrat', sans-serif;
              text-transform: uppercase;
              letter-spacing: 2px;
              color: #000;
            }

            h3 {
              color: #000000;
              font-size: 24px;
              font-weight: 700;
              font-family: 'Montserrat', sans-serif;
            }

            form {
              .row {
                .v-select {
                  border: transparent;
                  background: #fff !important;
                  color: rgba(0, 0, 0, 0.8) !important;
                  font-size: 14px;
                  font-weight: 500;
                  border-radius: 5px;
                  box-shadow: none !important;
                  height: 52px;
                  margin-bottom: 16px;

                  .vs__dropdown-toggle {
                    border: 0;
                    height: 52px;

                    .vs__search {
                      z-index: 0;
                    }
                  }
                }

                .form-group {
                  width: 100%;
                  .form-control {
                    border: transparent;
                    background: #fff !important;
                    color: rgba(0, 0, 0, 0.8) !important;
                    font-size: 14px;
                    font-weight: 500;
                    border-radius: 5px;
                    -webkit-box-shadow: none !important;
                    box-shadow: none !important;
                    height: 52px;
                  }

                  .mx-input-wrapper {
                    .mx-input {
                      border: transparent;
                      background: #fff !important;
                      color: rgba(0, 0, 0, 0.8) !important;
                      font-size: 14px;
                      font-weight: 500;
                      border-radius: 5px;
                      -webkit-box-shadow: none !important;
                      box-shadow: none !important;
                      height: 52px;
                    }
                  }
                }

                textarea {
                  &.form-control {
                    &:focus {
                      box-shadow: none;
                      border-color: transparent;
                    }
                  }
                }

                .btn-dark {
                  margin-top: 16px;
                  cursor: pointer;
                  border-radius: 4px;
                  -webkit-box-shadow: none !important;
                  box-shadow: none !important;
                  font-size: 11px;
                  text-transform: uppercase;
                  letter-spacing: 1px;
                  font-weight: 600;
                  width: 100%;
                  padding: 1rem 1.5rem;
                  font-family: 'Montserrat', sans-serif;
                }

              }
            }
          }

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .contact-us {
      background-image: url('../../assets/images/contact-us.jpeg');
      background-repeat: no-repeat;
      background-size: cover;
      .overlay {
        width: 100% !important;
        opacity: .8 !important;
      }
    }
  }
</style>