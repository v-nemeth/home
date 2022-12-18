Rails.application.routes.draw do
  resources :games
  resources :game_sessions
  resources :players
  resources :pages
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "pages#index"
end
