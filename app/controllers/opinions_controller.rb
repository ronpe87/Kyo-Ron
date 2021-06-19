class OpinionsController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create, :edit, :update, :destroy]

  def index
    @opinions = Opinion.all
  end

  def new
    @opinion = Opinion.new
  end
end
