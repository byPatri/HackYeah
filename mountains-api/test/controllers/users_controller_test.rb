require 'test_helper'

class UsersControllerTest < ActionDispatch::IntegrationTest

  def setup
    @user = users(:user_one)
  end

  test 'returns user when record exists' do
    get "/users/#{@user.id}"
    json_response = ActiveSupport::JSON.decode @response.body
    assert_response :success
    assert_equal json_response['id'], @user.id
  end

  test 'creates new user if valid params' do
    post '/users', params: { email: "test@test.com", password: "abcdefg", first_name: "Jon", last_name: "Snow", phone_nr: "112233445566" }
    assert_response :success
    json_response = ActiveSupport::JSON.decode @response.body
    assert_equal json_response["id"], User.last.id
    assert_equal json_response["email"], "test@test.com"
    assert_equal json_response["password"], "abcdefg"
    assert_equal json_response["first_name"], "Jon"
    assert_equal json_response["last_name"], "Snow"
    assert_equal json_response["phone_nr"], "112233445566"
  end

  test 'doesnt create new user if not valid params' do
    post '/users', params: { email: "testtest.com" }
    assert_response 422
  end

  test 'updates user if valid params' do
    put "/users", params: { email: "newtest@test.com", encrypted_password: "123abcdefg", first_name: "Jonny", last_name: "Snow", phone_nr: "00000000000000" }
    assert_response 302
  end

end
