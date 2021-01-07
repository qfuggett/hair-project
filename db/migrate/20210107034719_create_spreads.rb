class CreateSpreads < ActiveRecord::Migration[6.0]
  def change
    create_table :spreads do |t|
      t.string :name
      t.integer :user_id
      t.integer :reading_id

      t.timestamps
    end
  end
end
