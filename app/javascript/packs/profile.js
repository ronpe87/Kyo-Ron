import $ from 'jquery'
import axios from 'axios'

document.addEventListener('DOMContentLoaded', () => {
  $(function () {
    $('.profilePage_image').on('click', function () {
      $('#profile-upload').fadeIn();
    });
    $('.avatar_cancel').on('click', function () {
      $('#profile-upload').fadeOut();
    });
  });
});
