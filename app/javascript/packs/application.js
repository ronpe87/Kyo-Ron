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
  const theme_data = $('#theme_data').data()
  const theme = theme_data.userTheme
  if (theme == 'dark') {
    $('body, .header, .comment_form').addClass('dark_color')
    $('.header_title').children('a:link').css('color','white')
    $('.timeline-btn').children('a:link').css('color', 'white')
    $('.label, .profilePage').addClass('dark_font')
    $('.profilePage_count_followings_num').children('a:link').css('color', 'white')
    $('.profilePage_count_followers_num').children('a:link').css('color', 'white')
  }
})
