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
});
