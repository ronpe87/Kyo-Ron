class AddUserIdToOpinions < ActiveRecord::Migration[6.0]
  def change
    add_reference :opinions, :user
    # add_column :opinions, :user_id, :integer
  end
end
