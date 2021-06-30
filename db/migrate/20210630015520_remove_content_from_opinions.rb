class RemoveContentFromOpinions < ActiveRecord::Migration[6.0]
  def up
    remove_column :opinions, :content
  end
end
