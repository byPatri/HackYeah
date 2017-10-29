class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :encrypted_password, null: false
      t.datetime :remember_created_at
      t.string :reset_password_token
      t.datetime :reset_password_sent_at
      t.integer :sign_in_count, default: 0, null: false
      t.datetime :current_sign_in_at
      t.datetime :last_sign_in_at
      t.string :current_sign_in_ip
      t.string :last_sign_in_ip
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :phone_nr, null: false
      t.string :health_condition
      t.integer :trip_ids, array: true, default: []
      t.integer :emergency_contact_ids, default: [], array: true
      t.string :user_state, default: "safe"
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :phone_nr, null: false
      t.integer :emergency_contact_ids, array: true, default: []
      t.integer :trip_ids, array: true, default: []
      t.integer :health_condition, :string
      t.boolean :active, default: true
      t.string :user_state
      t.timestamps
    end
  end
end
