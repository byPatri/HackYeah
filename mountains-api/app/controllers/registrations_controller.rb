class RegistrationsController < Devise::RegistrationsController  
  respond_to :json

  def create
    user = User.create(user_params)
    if user.valid?
      render :json=> user.as_json(:email=>user.email), :status=>201
      return
    else
      warden.custom_failure!
      render :json=> user.errors, :status=>422
    end
  end

  private 

    def user_params
    # whitelist params
    params.permit(:email, :password, :first_name, :last_name, :phone_nr, :emergency_contact_ids, :trip_ids, :health_condition, :comment, :active, :user_state)
  end
end 
