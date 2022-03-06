class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :username, :avatar_comment_image, :name
  has_many :comments
  has_one :profile

  def name
    if object.username.present?
      object.username
    else
      'ゲスト'
    end
  end

  def avatar_comment_image
    if object.avatar_image != 'light-avatar.png'
      rails_blob_path(object.avatar_image) # if object.avatar_image.attachment
    else
      '/light-avatar.png' #jsにてimg srcで表示させようとしているのに/assets/を前につけなかったから動作しなかった。フォルダ指定必須。
    end
  end
end
