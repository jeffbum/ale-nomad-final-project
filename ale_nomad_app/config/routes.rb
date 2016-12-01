Rails.application.routes.draw do

  resources :categories
  resources :brews
root 'beers#static'
get '/find_beer' => 'beers#static'
get '/find_brew' => 'beers#static'



scope '/api' do
  # get '/search/:name' => 'beers#search'
  get '/filter' => 'categories#filter'
  resources :beers



end







  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
