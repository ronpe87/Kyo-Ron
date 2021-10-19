class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :username, :avatar_comment_image
  has_many :comments
  has_one :profile

end
