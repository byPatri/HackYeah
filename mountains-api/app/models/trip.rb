class Trip < ApplicationRecord
  validates_presence_of :trip_category, :start_time, :end_time, :user_id, :current_state
  validates_presence_of :start_point, :end_point, :unless => :trail_id?
  
  belongs_to :user
  belongs_to :trail, optional: true
  has_one :emergency_contact

end
