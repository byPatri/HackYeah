class CreateEmergencyContacts < ActiveRecord::Migration[5.1]
  def change
    create_table :emergency_contacts do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :phone_nr, null: false
      t.string :email, null: false
      t.integer :user_id, null: false
      t.boolean :active, default: true
      t.boolean :alert_notification_sent, default: false
      t.boolean :first_notification_sent, default: false

      t.timestamps
    end
  end
end
