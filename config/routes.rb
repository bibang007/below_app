Rails.application.routes.draw do
  post 'user_token' => 'user_token#create'
  resources :users
  
  resources :posts
  resources :users do
    resources :posts
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
