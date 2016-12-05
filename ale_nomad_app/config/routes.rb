Rails.application.routes.draw do

root 'beers#static'
get '/find_beer' => 'beers#static'
get '/find_brew' => 'beers#static'

get '/show/beer' => 'beers#show'

scope '/api' do
  get '/show/beer' => 'beers#show'
  get '/show/brew' => 'brews#show'
  # get '/search/:name' => 'beers#search'
  get '/filter' => 'beers#filter'
  get '/fake' => 'beers#fake'
  resources :beers

  resources :users

  resources :categories
  resources :brews

end







  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
