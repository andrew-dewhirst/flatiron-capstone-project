class CreateCards < ActiveRecord::Migration[6.1]
  def change
    create_table :cards do |t|
      t.string :name
      t.string :description
      t.string :condition
      t.decimal :price

      t.timestamps
    end
  end
end
