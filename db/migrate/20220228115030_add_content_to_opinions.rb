class AddContentToOpinions < ActiveRecord::Migration[6.0]
  def change
    add_column :opinions, :red_opinion, :string
    add_column :opinions, :blue_opinion, :string
  end
end
