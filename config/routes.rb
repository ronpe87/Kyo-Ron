Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: "opinions#index"
  resource :timeline, only: [:show]

  resources :opinions do
    resources :comments, only: [:index, :create]
  end

  resources :accounts, only: [:show] do
    resources :follows, only: [:create]
    resources :unfollows, only: [:create]
  end

  resource :profile, only: [:show, :edit, :update]
end
