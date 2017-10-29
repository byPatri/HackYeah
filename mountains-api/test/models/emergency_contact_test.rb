require 'test_helper'

class EmergencyContactTest < ActiveSupport::TestCase
  def setup
    @user = users(:user_one)
    @contact = emergency_contacts(:em_contact_one)
  end

  test 'valid user' do
    @contact.user_id = @user.id
    assert @contact.valid?
  end

  test 'invalid without email' do
    @contact.email = nil
    refute @contact.valid?
    assert_equal ["is invalid"], @contact.errors[:email]
  end

  test 'invalid with invalid email' do
    @contact.email = "test_email.com"
    refute @contact.valid?
    assert_equal ["is invalid"], @contact.errors[:email]
  end

  test 'invalid with phone number too short' do
    @contact.phone_nr = "123"
    refute @contact.valid?
    assert_equal ["is too short (minimum is 9 characters)"], @contact.errors[:phone_nr]
  end

  test 'invalid without first_name' do
    @contact.first_name = nil
    refute @contact.valid?
    assert_equal ["can't be blank"], @contact.errors[:first_name]
  end
end
