class CreateTrips < ActiveRecord::Migration[5.1]
  def change
    create_table :trips do |t|
      t.string :trip_category
      t.string :start_point
      t.string :end_point
      t.integer :trail_id
      t.datetime :start_time
      t.datetime :end_time
      t.string :comment
      t.integer :user_id
      t.integer :emergency_contact_id

      t.timestamps
    end
    add_column :trips, :current_state, :string
  end
end
