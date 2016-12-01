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

    


end
