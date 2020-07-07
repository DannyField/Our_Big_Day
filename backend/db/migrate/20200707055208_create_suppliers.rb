class CreateSuppliers < ActiveRecord::Migration[6.0]
  def change
    create_table :suppliers do |t|
      t.string :name
      t.string :email
      t.string :phone
      t.string :business_name
      t.string :business_type
      t.text :details

      t.timestamps
    end
  end
end
