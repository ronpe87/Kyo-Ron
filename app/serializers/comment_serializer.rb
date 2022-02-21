class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :content3
  belongs_to :user
  belongs_to :profile
end
