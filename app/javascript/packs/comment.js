import $ from 'jquery'
import axios from 'axios'
import { csrfToken } from 'rails-ujs'

axios.defaults.headers.common['X-CSRF-Token'] = csrfToken()

const handleCommentForm = () => {
  $('.show_comment_form').on('click', () => {
    $('.show_comment_form').addClass('hidden')
    $('.comment_area').removeClass('hidden')
  })

  $('.comment_cancel').on('click', () => {
    $('.comment_area').addClass('hidden')
    $('.show_comment_form').removeClass('hidden')
  })

  $('.show_comment_form1').on('click', () => {
    $('.show_comment_form1, .comment_text_area3').addClass('hidden')
    $('.show_comment_form3, .comment_text_area1').removeClass('hidden')
    $('#comment_content3').val('')
  })

  $('.show_comment_form3').on('click', () => {
    $('.show_comment_form3, .comment_text_area1').addClass('hidden')
    $('.show_comment_form1, .comment_text_area3').removeClass('hidden')
    $('#comment_content').val('')
  })
}

const appendNewComment = (comment) => {
  if (comment.content == '') {
    $('.comments_container').append(
    `<div class="comment_detail_red all">
      <div class="comments_user_red">
        <div class="comments_user_avatar">
          <img src="${comment.user.avatar_comment_image}">
        </div>
        <div class="comments_user_flex">
          <div class="comments_user_name">${comment.user.username}</div>
          <div class="delete-space">
            <div class="card_detail_delete hidden" id="${comment.user.id}">
              <a href="/opinions/opinion_id/comments/${comment.id}" data-method="delete" data-confirm="コメントを削除してもよろしいですか?"><img src="/delete2.png"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="comment_content">
        <div class="comment_content_signal">
          <p>${comment.content3}</p>
        </div>
      </div>
    </div>`
    )
  } else {
    $('.comments_container').append(
      `<div class="comment_detail all">
      <div class="comment_content">
        <div class="comment_content_signal">
          <p>${comment.content}</p>
        </div>
      </div>
      <div class="comments_user">
        <div class="comments_user_avatar">
          <img src="${comment.user.avatar_comment_image}">
        </div>
        <div class="comments_user_flex">
          <div class="comments_user_name">${comment.user.username}</div>
          <div class="delete-space">
            <div class="card_detail_delete hidden" id="${comment.user.id}">
              <a href="/opinions/opinion_id/comments/${comment.id}" data-method="delete" data-confirm="コメントを削除してもよろしいですか?"><img src="/delete2.png"></a>
            </div>
          </div>
        </div>
      </div>
    </div>`
    )
  }

  const theme_data = $('#theme_data').data()
  const theme = theme_data.userTheme
  if (theme == 'dark'){
    $('img[src="/light-avatar.png"]').attr('src', '/dark-avatar.png')
    $('img[src="/delete2.png"]').attr('src', '/w-delete2.png')
    $('.comments_user_name, .comment_content_signal').css('color', 'white')
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const dataset = $('#opinion_show').data()
  const opinionId = dataset.opinionId
  const commentdataset = $('#opinion_show').data()
  const Current = $(commentdataset).attr('userId');

  axios.get(`/opinions/${opinionId}/comments`)
    .then((response) => {
      const comments = response.data
      comments.forEach((comment) => {
        appendNewComment(comment)
        $('[id*=' + Current + ']').removeClass('hidden')
      })
    })

  handleCommentForm()

  $('.add_comment_button').on('click', () => {
    const content = $('#comment_content').val()
    const content3 = $('#comment_content3').val()
    if (!content && !content3) {
      window.alert('コメントを入力してください')
    } else {
      axios.post(`/opinions/${opinionId}/comments`, {
        comment: { content: content, content3: content3 }
      })
        .then((res) => {
          const comment = res.data
          appendNewComment(comment)
          $('#comment_content').val('')
          $('#comment_content3').val('')
          $('.show_comment_form').removeClass('hidden')
          $('.comment_area').addClass('hidden')
        })
    }
  })

  $('.comments_container').on('click', '.card_detail_delete', function() {
    $(this).parents('.comment_detail').remove();
  });

  $('.comments_signal_blue').on('click', () => {
    $('.comment_detail_red').addClass('hidden')
    $('.comment_detail').removeClass('hidden')
  })

  $('.comments_signal_red').on('click', () => {
    $('.comment_detail').addClass('hidden')
    $('.comment_detail_red').removeClass('hidden')
  })

  $('.comments_signal_all').on('click', () => {
    $('.comment_detail_red, .comment_detail').removeClass('hidden')
  })
})
