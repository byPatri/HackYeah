class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  validates :email, uniqueness: true, format: { with: /\A([\w+\-]\.?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i }
  validates :password, length: { in: 6..20 }
  validates :phone_nr, uniqueness: true, length: { minimum: 9 }
  validates_presence_of :first_name, :last_name

  has_many :emergency_contacts, dependent: :destroy
  has_many :trips, dependent: :destroy

end
