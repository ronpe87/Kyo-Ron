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

  // if ($('.header').has('dark_color')) {
  const theme_data = $('#theme_data').data()
  const theme = theme_data.userTheme
  if (theme == 'dark') {
    $('.timeline-btn').children('a:link').css('color', 'white')
    $('.profilePage_count_followings_num').children('a:link').css('color', 'white')
    $('.profilePage_count_followers_num').children('a:link').css('color', 'white')
  }
});
