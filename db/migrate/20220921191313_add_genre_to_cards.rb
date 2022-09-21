class AddGenreToCards < ActiveRecord::Migration[6.1]
  def change
    add_column :cards, :genre, :string
  end
end
