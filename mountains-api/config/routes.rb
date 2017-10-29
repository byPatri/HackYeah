Rails.application.routes.draw do
  devise_for :users, :controllers => {sessions: 'sessions', registrations: 'registrations'} 
  resources :users, only: [:show]
  resources :trips
  post '/trips/start/:id', to: 'trips#start', as: 'trip'
  post '/trips/finish/:id', to: 'trips#finish', as: 'trip'
  resources :emergency_contacts

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
