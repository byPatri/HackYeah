class UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    json_response(@user)
  end
end
