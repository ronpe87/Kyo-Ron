class OpinionsController < ApplicationController
  before_action :set_opinion, only: [:show]
  before_action :authenticate_user!, only: [:new, :create, :edit, :update, :destroy, :show]

  def index
    @opinions = Opinion.all
  end

  def show
    @opinion = Opinion.find(params[:id])
    @comments = @opinion.comments
  end

  def new
    @opinion = current_user.opinions.build
  end

  def create
    @opinion = current_user.opinions.build(opinion_params)
    if @opinion.save
      redirect_to root_path(@opinion), notice: '保存できました'
    else
      render :new
    end
  end

  def destroy
    opinion = current_user.opinions.find(params[:id])
    opinion.destroy!
    redirect_to root_path, notice: '削除に成功しました'
  end

  private
  def opinion_params
    params.require(:opinion).permit(:title, :content)
  end

  def set_opinion
    @opinion = Opinion.find(params[:id])
  end
end
