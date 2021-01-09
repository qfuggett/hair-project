Rails.application.routes.draw do
  resources :products
  resources :ingredients
  
  resources :products do
    resources :ingredients
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
