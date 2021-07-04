class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :content2, :content3
  belongs_to :user
  belongs_to :profile
end
