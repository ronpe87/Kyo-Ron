// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()

require("@rails/activestorage").start()
require("channels")

require("chartkick/chart.js")

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

require("trix")
require("@rails/actiontext")

import $ from 'jquery'
import axios from 'axios'
import { csrfToken } from 'rails-ujs'

axios.defaults.headers.common['X-CSRF-Token'] = csrfToken()

document.addEventListener('DOMContentLoaded', () => {
  $('.darkmode').on('click', () => {
    $('.darkmode').addClass('hidden')
    $('.lightmode').removeClass('hidden')
    $('body').addClass('dark_color')
    $('.header').addClass('dark_color')
  })

  $('.lightmode').on('click', () => {
    $('.lightmode').addClass('hidden')
    $('.darkmode').removeClass('hidden')
    $('body').removeClass('dark_color')
    $('.header').removeClass('dark_color')
  })
})
