require 'sidekiq/web'

Rails.application.routes.draw do
  mount Sidekiq::Web => '/sidekiq' if Rails.env.development?
  mount LetterOpenerWeb::Engine, at: '/letter_opener' if Rails.env.development?

  devise_for :users, controllers: {
    registrations: 'users/registrations',
    passwords: 'users/passwords'
  }
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: "opinions#index"
  resource :timeline, only: [:show]

  resources :opinions do
    resources :comments, only: [:index, :create, :destroy]
  end

  resources :accounts, only: [:show] do
    resources :followings, only: [:index]
    resources :follows, only: [:index, :show, :create]
    resources :unfollows, only: [:create]
  end

  resource :profile, only: [:show, :edit, :update]

  devise_scope :user do
    post 'users/guest_sign_in', to: 'users/sessions#guest_sign_in'
  end
end
