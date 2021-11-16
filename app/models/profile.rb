class Profile < ApplicationRecord
  enum theme: { light: 0, dark: 1 }
  belongs_to :user
  has_one_attached :avatar
end
