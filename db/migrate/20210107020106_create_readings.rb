class CreateReadings < ActiveRecord::Migration[6.0]
  def change
    create_table :readings do |t|
      t.string :name
      t.string :description
      t.string :upright
      t.string :reversed
      t.integer :user_id

      t.timestamps
    end
  end
end
