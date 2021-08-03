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
    `<div class="comment_detail">
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
              <a href="/opinions/opinion_id/comments/${comment.id}" data-method="delete" data-confirm="コメントを削除してもよろしいですか?"><img src="/assets/delete.png"></a>
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
        // const commentUserId = comment.user.id
        // console.log(comment.user)
        // console.log(commentUserId)
        // if (Current == commentUserId) {
        $('[id*=' + Current + ']').removeClass('hidden')
        // }
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
  // $('.comments_container').on('click', '.comments_user_name', function() {
  // const commentId = $(this).attr('id');
  // const commentdataset = $('#comment_user').data()
  // const Current = $(commentdataset).attr('userId');
  //   if (commentId == Current) {
  //     window.alert('一致')
  //   } else {
  //     console.log(commentId)
  //   }
  // })
})
