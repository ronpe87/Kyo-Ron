class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :opinion
  validates :content, presence: true

  after_create :send_email

  private
  def send_email
    CommentMailer.new_comment(opinion).deliver_later #開発環境でletter_openerにて閲覧可能
  end
end
