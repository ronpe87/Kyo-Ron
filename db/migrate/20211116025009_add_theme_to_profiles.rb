class AddThemeToProfiles < ActiveRecord::Migration[6.0]
  def change
    add_column :profiles, :theme, :integer
  end
end
