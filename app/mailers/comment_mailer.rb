class CommentMailer < ApplicationMailer
  def new_comment(opinion)
    @opinion = opinion
    @opinion_user = @opinion.user
    mail to: @opinion_user.email, subject: 'コメントされました'
  end
end
