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
        @items = @items.search_by_name(params[:search])
      end
      @items.order(params[:order] || { created_at: :desc })
      @items = @items.ransack(params[:filter]).result
      @items = @items.to_a.uniq
      render json: @items
    end


end
