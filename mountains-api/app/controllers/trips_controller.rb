class TripsController < ApplicationController
  before_action :set_trip, only: [:show, :update]

  def index
    @trips = Trip.all
    json_response(@trips)
  end

  def show
    json_response(@trip)
  end

  def create
    @trip = Trip.create!(trip_params)
    json_response(@trip, :created)
  end

  def update
    @trip.update(trip_params)
    head :no_content
  end

  def start
    @trip.update(current_state: "ongoing")
  end

  def finish
    @trip.update(current_state: "finished")
  end

  private

  def trip_params
    # whitelist params
    params.permit(:trip_category, :trail_id, :start_time, :end_time, :comment, :user_id, :start_point, :end_point, :current_state)
  end

  def set_trip
    @trip = Trip.find(params[:id])
  end
end
