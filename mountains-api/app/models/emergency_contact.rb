class EmergencyContact < ApplicationRecord
  validates :email, format: { with: /\A([\w+\-]\.?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i }
  validates :phone_nr, presence: true, length: { minimum: 9 }
  validates_presence_of :first_name, :last_name, :user_id

  belongs_to :user
  has_many :trips, through: :user

end
