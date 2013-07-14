class CreateEntries < ActiveRecord::Migration
  def change
    create_table :entries do |t|
      t.string :name
      t.string :address
      t.string :tag

      t.timestamps
    end
  end
end
