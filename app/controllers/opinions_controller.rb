class OpinionsController < ApplicationController
  before_action :set_opinion, only: [:show]
  before_action :authenticate_user!, only: [:new, :create, :edit, :update, :destroy, :show]

  def index
    # @opinions = Opinion.all.page(params[:page]).per(5)
    @q = Opinion.ransack(params[:q]) #ransackメソッドは検索ヘルパーメソッド
    @opinions = @q.result(distinct: true).includes(:user).page(params[:page]).per(5) #resultメソッドは検索結果を返すヘルパーメソッド。distinct: trueは、重複する検索結果を除外する役割を持つ。
  end

  def show
    @opinion = Opinion.find(params[:id])
    @comments = @opinion.comments
    @data1 = @comments.where.not(content: "").count('distinct user_id')
    @data3 = @comments.where.not(content3: "").count('distinct user_id')
    @all_data = @data1 + @data3
    @graf1 = (@data1.to_f/@all_data).round(3) * 100
    @graf3 = (@data3.to_f/@all_data).round(3) * 100
  end

  def new
    @opinion = current_user.opinions.build
  end

  def create
    @opinion = current_user.opinions.build(opinion_params)
    if @opinion.save
      redirect_to opinions_path(@opinion), notice: '保存できました'
    else
      render :new
    end
  end

  def destroy
    opinion = current_user.opinions.find(params[:id])
    opinion.destroy!
    redirect_to opinions_path, notice: '削除に成功しました'
  end

  private
  def opinion_params
    params.require(:opinion).permit(:title, :content, :red_opinion, :blue_opinion)
  end

  def set_opinion
    @opinion = Opinion.find(params[:id])
  end
end
