class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.string :title
      t.text :body
      t.string :task_date
      t.string :due_date
      t.string :contact_name
      t.string :contact_email
      t.string :contact_mobile
      t.text :image
      t.text :extra_info
      t.boolean :completed

      t.timestamps
    end
  end
end
