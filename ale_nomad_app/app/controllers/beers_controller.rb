class BeersController < ApplicationController

    def create
    end

    def static
    end
    #Static Method for FrontEnd Team

    def index
      @beer = Beer.all
      render json: @beer
    end
    #Displays all beer

    def show
      @beer = Untappd::Beer.info(params[:id], :offset => 100)
        render json: @beer
    end



    def search
      @beers = Untappd::Beer.search(params[:name])
        render json: @beers
    end

    def trending
      @beers = Untappd::Beer.trending
      render json: @beers
    end

    def filter
      @beers = Beer.all
      if params[:search]
        @beers = @beers.search_by_all(params[:search])
      end
      @beers.order(params[:order] || { created_at: :desc })
      @beers = @beers.ransack(params[:filter]).result
      @beers = @beers.to_a.uniq
      render json: @beers
    end


    def fake
      brewery_db = BreweryDB::Client.new do |config|
        config.api_key = ENV['breweryapikey']
      end

      feedback = brewery_db.locations.all(locality: 'Indianapolis', offset: 50)
      render json: feedback
    end


end
