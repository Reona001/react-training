Rails.application.routes.draw do
  root 'pages#index'
  match '*path', to: 'pages#index', via: :all
  # Here, via all will be a catch-all which will send all
  # request to pages index which has our rails pack tag
  # then it will redirect to each of our react routes.
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

# To run real time react: ./bin/webpack-dev-server
