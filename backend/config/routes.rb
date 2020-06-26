Rails.application.routes.draw do
  get '/', to: "tasks#index"
  post '/create', to: 'tasks#create' 

end
