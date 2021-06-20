class Opinion < ApplicationRecord
  belongs_to :user
  validates :title, presence: true
  validates :content, presence: true

  def display_created_at
    I18n.l(self.created_at, format: :default)
  end

  def author_name
    user.display_name
  end
end
