Rails.application.routes.draw do

root 'beers#static'
get '/find_beer' => 'beers#static'
get '/find_brew' => 'beers#static'



scope '/api' do
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
