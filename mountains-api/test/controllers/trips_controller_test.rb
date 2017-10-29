require 'test_helper'

class TripsControllerTest < ActionDispatch::IntegrationTest

  def setup
    @user = users(:user_one)
    @trip = trips(:trip_one)
  end

  test 'returns trips' do
    get '/trips'
    assert_response :success
  end

  test 'returns trip when record exists' do
    get "/trips/#{@trip.id}"
    json_response = ActiveSupport::JSON.decode @response.body
    assert_response :success
    assert_equal json_response['id'], @trip.id
  end

  test 'returns status code 404 if trip does not exist' do
    get "/trips/#{@trip.id + 1}"
    assert_response :missing
  end

  test 'creates new trip if valid params' do
    post '/trips', params: { trip_category: "Mountain Climbing", start_time: Time.zone.now, end_time: Time.zone.now + 5.hours, user_id: @user.id, current_state: "planned", start_point: "Zakopane", end_point: "Morskie Oko"}
    assert_response :success
    json_response = ActiveSupport::JSON.decode @response.body
    assert_equal json_response["id"], Trip.last.id
    assert_equal json_response["trip_category"], "Mountain Climbing"
    assert_equal json_response["user_id"], @user.id
    assert_equal json_response["current_state"], "planned"
    assert_equal json_response["start_point"], "Zakopane"
    assert_equal json_response["end_point"], "Morskie Oko"
  end

  test 'doesnt create new trip if not valid params' do
    post '/trips', params: { trip_category: nil }
    assert_response 422
  end

  test 'updates trip if valid params' do
    put "/trips/#{@trip.id}", params: { current_state: "finished" }
    assert_response 204
  end

end
