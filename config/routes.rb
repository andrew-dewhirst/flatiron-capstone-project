Rails.application.routes.draw do

  resources :cards, only: [:index, :destroy]
  resources :carts
  resources :line_items
  resources :reviews, only: [:index, :create, :update, :destroy]
  resources :users, only: [:index, :update, :destroy]
  
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "rails/active_storage/direct_uploads", to: "direct_uploads#create"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "/mycart", to: "carts#new"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
