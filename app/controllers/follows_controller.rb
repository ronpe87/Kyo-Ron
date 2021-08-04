class FollowsController < ApplicationController
  before_action :authenticate_user!

  def index
    user = User.find(params[:account_id])
    @followers = user.followers
  end

  def create
    current_user.follow!(params[:account_id])
  end
end
