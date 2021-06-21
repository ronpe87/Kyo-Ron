class Opinion < ApplicationRecord
  belongs_to :user
  validates :title, presence: true
  validates :title, length: { minimum: 3, maximum: 50 }
  validates :content, presence: true
  validates :content, length: { minimum: 10 }
  validates :content, uniqueness: true

  def display_created_at
    I18n.l(self.created_at, format: :default)
  end

  def author_name
    user.display_name
  end
end
