class AddColumnContent23ToComments < ActiveRecord::Migration[6.0]
  def up
    add_column :comments, :content2, :text
    add_column :comments, :content3, :text
  end
end
