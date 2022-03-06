class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_one :profile, dependent: :destroy
  has_many :opinions, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many :following_relationships, foreign_key: 'follower_id', class_name: 'Relationship', dependent: :destroy
  has_many :followings, through: :following_relationships, source: :following
  has_many :follower_relationships, foreign_key: 'following_id', class_name: 'Relationship', dependent: :destroy
  has_many :followers, through: :follower_relationships, source: :follower

  def has_written?(opinion)
    opinions.exists?(id: opinion.id)
  end

  def prepare_profile
    profile || build_profile
  end

  def follow!(user)
    user_id = get_user_id(user)
    following_relationships.create!(following_id: user_id)
  end

  def unfollow!(user)
    user_id = get_user_id(user)
    relation = following_relationships.find_by!(following_id: user_id)
    relation.destroy!
  end

  def has_followed?(user)
    following_relationships.exists?(following_id: user.id)
  end

  def followings_count
    followings.count
  end

  def followers_count
    followers.count
  end

  def opinions_count
    opinions.count
  end

  def avatar_image
    if profile&.avatar&.attached?
      profile.avatar
    else
      'light-avatar.png'
    end
  end

  def dark_avatar_image
    if profile&.avatar&.attached?
      profile.avatar
    else
      'dark-avatar.png'
    end
  end

  # 以下を追加
  def self.guest
    find_or_create_by!(email: 'guest@example.com') do |user|
      user.username = 'ゲスト'
      user.password = SecureRandom.urlsafe_base64
      # user.confirmed_at = Time.now  # Confirmable を使用している場合は必要
      # 例えば name を入力必須としているならば， user.name = "ゲスト" なども必要
    end
  end

  private
  def get_user_id(user)
    if user.is_a?(User) #userクラスがインスタンスだった場合(is_a)
      user.id
    else
      user
    end
  end
end
