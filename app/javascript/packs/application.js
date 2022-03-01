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
    $('.header_title').children('a:link').css('color', 'white')
    $('label, .card_title, .card_detail, .trix-content, .card_content_two, .opinion_ex_text').css('color', 'white')
    $('.dropdown, .profilePage_image, .card_detail_author_image2').children('img').attr('src', '/dark-avatar.png')
  } else {
    $('.label').css('color', 'black')
  }

  $(document).on('click', function (e) {
    if (!$(e.target).closest('.dropdown').length) {
      $('.dropdown_content').addClass('hidden')
      // ターゲット要素の外側をクリックした時の操作
    } else {
      $('.dropdown_content').removeClass('hidden')
      // ターゲット要素をクリックした時の操作
    }
  });
})
