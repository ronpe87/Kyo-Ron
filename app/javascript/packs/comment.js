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
    $('.show_comment_form1').addClass('hidden')
    $('.comment_text_area1').removeClass('hidden')
  })

  $('.comment_cancel1').on('click', () => {
    $('.comment_text_area1').addClass('hidden')
    $('.show_comment_form1').removeClass('hidden')
  })

  $('.show_comment_form2').on('click', () => {
    $('.show_comment_form2').addClass('hidden')
    $('.comment_text_area2').removeClass('hidden')
  })

  $('.comment_cancel2').on('click', () => {
    $('.comment_text_area2').addClass('hidden')
    $('.show_comment_form2').removeClass('hidden')
  })

  $('.show_comment_form3').on('click', () => {
    $('.show_comment_form3').addClass('hidden')
    $('.comment_text_area3').removeClass('hidden')
  })

  $('.comment_cancel3').on('click', () => {
    $('.comment_text_area3').addClass('hidden')
    $('.show_comment_form3').removeClass('hidden')
  })
}

const appendNewComment = (comment) => {
  $('.comments_container').append(
    `<div class="comment_detail all">
      <div class="comment_content">
        <div class="comment_content_signal blue">
          <p>${comment.content}</p>
        </div>
        <div class="comment_content_signal yellow">
          <p>${comment.content2}</p>
        </div>
        <div class="comment_content_signal red">
          <p>${comment.content3}</p>
        </div>
      </div>
      <div class="comments_user">
        <div class="comments_user_flex">
          <div class="comments_user_avatar">
            <img src="${comment.user.avatar_comment_image}">
          </div>
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
    const content2 = $('#comment_content2').val()
    const content3 = $('#comment_content3').val()
    if (!content && !content2 && !content3) {
      window.alert('コメントを入力してください')
    } else {
      axios.post(`/opinions/${opinionId}/comments`, {
        comment: { content: content, content2: content2, content3: content3 }
      })
        .then((res) => {
          const comment = res.data
          appendNewComment(comment)
          $('#comment_content').val('')
          $('#comment_content2').val('')
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
    $('.card_signal').removeClass('hidden')
    $('.card_blue').removeClass('hidden')
    $('.card_yellow').addClass('hidden')
    $('.card_red').addClass('hidden')
    $('.all').addClass('hidden')
    $('.blue').removeClass('hidden')
    $('.yellow').addClass('hidden')
    $('.red').addClass('hidden')
  })

  $('.comments_signal_yellow').on('click', () => {
    $('.card_signal').removeClass('hidden')
    $('.card_yellow').removeClass('hidden')
    $('.card_blue').addClass('hidden')
    $('.card_red').addClass('hidden')
    $('.all').addClass('hidden')
    $('.yellow').removeClass('hidden')
    $('.blue').addClass('hidden')
    $('.red').addClass('hidden')
  })

  $('.comments_signal_red').on('click', () => {
    $('.card_signal').removeClass('hidden')
    $('.card_red').removeClass('hidden')
    $('.card_yellow').addClass('hidden')
    $('.card_blue').addClass('hidden')
    $('.all').addClass('hidden')
    $('.red').removeClass('hidden')
    $('.yellow').addClass('hidden')
    $('.blue').addClass('hidden')
  })

  $('.comments_signal_all').on('click', () => {
    $('.all').removeClass('hidden')
    $('.blue').removeClass('hidden')
    $('.yellow').removeClass('hidden')
    $('.red').removeClass('hidden')
    $('.card_signal').addClass('hidden')
  })
})
