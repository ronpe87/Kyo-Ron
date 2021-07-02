class CommentsController < ApplicationController

  def index
    opinion = Opinion.find(params[:opinion_id])
    comments = opinion.comments
    render json: comments, include: { user: [ :profile] }
  end

  def create
    opinion = Opinion.find(params[:opinion_id])
    @comment = opinion.comments.build(comment_params.merge!(user_id: current_user.id))
    @comment.save!

    render json: @comment, include: { user: [ :profile] }
  end

  private

  def comment_params
    params.require(:comment).permit(:content, :content2, :content3)
  end
end
