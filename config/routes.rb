Rails.application.routes.draw do

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    get "/api_test", to: "static#api_test"
    get "braintree_token", to: "braintree#token"
    post "/payment", to: "braintree#payment"
    resources :skills
    resources :grades
    resources :users
  end
end
