class EmergencyContactsController < ApplicationController
  before_action :set_constact, only: [:show, :update, :destroy]

  def index
    @contacts = EmergencyContact.all
    json_response(@contacts)
  end

  def show
    json_response(@contacts)
  end

  def create
    @contact = Contact.create!(contact_params)
    json_response(@contact, :created)
  end

  def update
    @contact.update(contact_params)
    head :no_content
  end

  def destroy
    @contact.destroy!
    head :no_content
  end

  private

  def contact_params
    params.permit(:first_name, :last_name, :phone_nr, :email, :user_id, :active, :alert_notification_sent, :first_notification_sent)
  end

  def set_constact
    @contact = Contact.find(params[:id])
  end
end
