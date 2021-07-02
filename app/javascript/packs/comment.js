import $ from 'jquery'
import axios from 'axios'
import { csrfToken } from 'rails-ujs'

axios.defaults.headers.common['X-CSRF-Token'] = csrfToken()

const handleCommentForm = () => {
  $('.show_comment_form').on('click', () => {
    $('.show_comment_form').addClass('hidden')
    $('.comment_text_area').removeClass('hidden')
  })

  $('.comment_cancel').on('click', () => {
    $('.comment_text_area').addClass('hidden')
    $('.show_comment_form').removeClass('hidden')
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
      <div class="comments_user">
        <img class='comments_user_avatar' src="${comment.user.avatar_comment_image}">
      </div>
      <div class="comments_name">
        <p>${comment.user.username}</p>
      </div>
      <div class="comment_content">
        <p>${comment.content}</p>
        <p>${comment.content2}</p>
        <p>${comment.content3}</p>
      </div>
    </div>`
  )
}

document.addEventListener('DOMContentLoaded', () => {
  const dataset = $('#opinion_show').data()
  const opinionId = dataset.opinionId

  axios.get(`/opinions/${opinionId}/comments`)
    .then((response) => {
      const comments = response.data
      comments.forEach((comment) => {
        appendNewComment(comment)
      })
    })

  handleCommentForm()

  $('.add_comment_button').on('click', () => {
    const content = $('#comment_content').val()
    const content2 = $('#comment_content2').val()
    const content3 = $('#comment_content3').val()
    if (!content) {
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
        })
    }
  })
})
