class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.integer :price
      t.text :category
      t.text :content
      t.text :image

      t.timestamps
    end
  end
end
