class SessionsController < Devise::SessionsController  
  respond_to :json
  prepend_before_action :require_no_authentication, :only => [:create ]
  
  before_action :ensure_params_exist
  
  def create
    resource = User.find_by(email: (params[:email]))
    return invalid_login_attempt unless resource

    if resource.valid_password?(params[:session][:encrypted_password])
      sign_in("user", resource)
      render :json=> {:success=>true, :email=>resource.email}
      return
    end
  end
  
  def destroy
    sign_out(resource_name)
  end

  protected
  def ensure_params_exist
    return unless params[:session].blank?
    render :json=>{:success=>false, :message=>"missing user_login parameter"}, :status=>422
  end

  def invalid_login_attempt
    warden.custom_failure!
    render :json=> {:success=>false, :message=>"Error with your login or password"}, :status=>401
  end
end 