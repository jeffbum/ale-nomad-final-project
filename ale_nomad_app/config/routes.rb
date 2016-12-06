Rails.application.routes.draw do

root 'beers#static'
get '/find_beer' => 'beers#static'
get '/find_brew' => 'beers#static'
get '/find_abv' => 'beers#static'
get '/find_ibu' => 'beers#static'

scope '/api' do
  get '/show/beer' => 'beers#show'
  get '/show/brew' => 'brews#show'
  get '/show/location' => 'geosearch#distance'
  post '/signup'=> 'users#sign_up'
  post '/login' => 'users#log_in'
  post '/users/:id/unfollow' => 'users#follow'
  get '/all' => 'users#all'

  # get '/search/:name' => 'beers#search'
  get '/filter' => 'beers#filter'
  get '/fake' => 'beers#fake'
  resources :beers
  resources :users

  resources :categories
  resources :brews

end



get '/:beer(/:random)' => 'beers#static'




  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
