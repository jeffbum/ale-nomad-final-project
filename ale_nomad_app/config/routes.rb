Rails.application.routes.draw do

  root 'beers#static'
  get '/find_beer' => 'beers#static'
  get '/find_brew' => 'beers#static'
  get '/find_abv' => 'beers#static'
  get '/find_ibu' => 'beers#static'

  scope '/api' do
    post '/users/:id/follow' => 'users#follow'
    # get 'users/:id/followees' => 'users#followees'
    get '/all' => 'users#all'
    post '/signup'=> 'users#sign_up'
    post '/login' => 'users#log_in'

    get '/show/beer' => 'beers#show'
    get '/show/brew' => 'brews#show'
    get '/show/location' => 'geosearch#distance'

    get '/rate' => 'reviews#create'
    get '/show/ratings' => 'reviews#show'
    get '/myratings' => 'reviews#my_ratings'
    # no current use/cut due to time

    # get '/search/:name' => 'beers#search'
    get '/filter' => 'beers#filter'
    get '/fake' => 'beers#fake'
    # test response coming from brewerydb api
    get '/untap' => 'beers#untapsearch'
    # no current use/cut due to time
    get '/stock/' => 'beers#instock'
    # no current use/cut due to time
    resources :beers
    resources :users
    resources :categories
    resources :brews
    resources :drinks
    get '/mydrinks' => 'drinks#my_drinks'
  end

  get '/:beer(/:random)' => 'beers#static'

    # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
