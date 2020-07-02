Rails.application.routes.draw do
  resources :tasks
  
  # get '/', to: "tasks#index"
  # post '/create', to: 'tasks#create' 

end
