class OpinionsController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create, :edit, :update, :destroy]

  def index
    @opinions = Opinion.all
  end

  def new
    @opinion = Opinion.new
  end

  def create
    @opinion = Opinion.new(opinion_params)
    if @opinion.save
      redirect_to opinion_path(@opinion), notice: '保存できました'
    else
      render :new
    end
  end

  private
  def opinion_params
    params.require(:opinion).permit(:title, :content)
  end
end
