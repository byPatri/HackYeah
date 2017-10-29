require 'test_helper'

class TripTest < ActiveSupport::TestCase

  def setup
    @user = users(:user_one)
    @emergency_contact = emergency_contacts(:em_contact_one)
    @emergency_contact.update(user_id: @user_id)
    @trip = trips(:trip_one)
  end

  test 'valid trip' do
    @trip.user_id = @user.id
    assert @trip.valid?
  end

  test 'invalid without trip_category, start_point_id, end_point_id, start_time, end_time, emergency_contact_ids, user_id' do
    trip = Trip.create
    refute trip.valid?
    assert_equal ["can't be blank"], trip.errors[:trip_category]
    assert_equal ["can't be blank"], trip.errors[:start_point]
    assert_equal ["can't be blank"], trip.errors[:end_point]
    assert_equal ["can't be blank"], trip.errors[:start_time]
    assert_equal ["can't be blank"], trip.errors[:end_time]
    assert_equal ["can't be blank"], trip.errors[:user_id]
    assert_equal ["can't be blank"], trip.errors[:current_state]
  end

  test 'valid without start_point_id, end_point_id if trail_id present' do
    @trip.trail_id = 2
    @trip.start_point = nil
    @trip.end_point = nil
    @trip.user_id = @user.id
    assert @trip.valid?
  end
end
