import $ from 'jquery'
import axios from 'axios'

document.addEventListener('DOMContentLoaded', () => {
  $(function () {
    $('.icon').on('click', function () {
      $('#profile-upload').fadeIn();
    });
    $('.avatar_cancel').on('click', function () {
      $('#profile-upload').fadeOut();
    });
  });

  $('.follow_btn').on('click', () => {
    $('.follow_btn').addClass('hidden')
    $('.unfollow_btn').removeClass('hidden')
  })
  $('.unfollow_btn').on('click', () => {
    $('.unfollow_btn').addClass('hidden')
    $('.follow_btn').removeClass('hidden')
  })
});
