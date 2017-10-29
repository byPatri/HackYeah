require 'test_helper'

# class UserTest < ActiveSupport::TestCase

#   def setup
#     @user = users(:user_one)
#   end

#   test 'valid user' do
#     assert @user.valid?
#   end

#   test 'invalid without email' do
#     @user.email = nil
#     refute @user.valid?
#     assert_equal ["is invalid"], @user.errors[:email]
#   end

#   test 'invalid without unique email' do
#     user_two = users(:user_two)
#     user_two.email = @user.email
#     refute user_two.valid?
#     assert_equal ["has already been taken"], user_two.errors[:email]
#   end

#   test 'invalid with invalid email' do
#     @user.email = "test_email.com"
#     refute @user.valid?
#     assert_equal ["is invalid"], @user.errors[:email]
#   end

#   test 'invalid with password too short' do
#     @user.encrypted_password = "abc"
#     refute @user.valid?
#     assert_equal ["is too short (minimum is 6 characters)"], @user.errors[:encrypted_password]
#   end

#   test 'invalid with phone number too short' do
#     @user.phone_nr = "123"
#     refute @user.valid?
#     assert_equal ["is too short (minimum is 9 characters)"], @user.errors[:phone_nr]
#   end

#   test 'invalid with phone number not unique' do
#     user_two = users(:user_two)
#     user_two.phone_nr = @user.phone_nr
#     refute user_two.valid?
#     assert_equal ["has already been taken"], user_two.errors[:phone_nr]
#   end

#   test 'invalid without first_name' do
#     @user.first_name = nil
#     refute @user.valid?
#     assert_equal ["can't be blank"], @user.errors[:first_name]
#   end
# end
