class BeersController < ApplicationController

    def static
    end
    def index
      @beers = Beer.all.order(:beer_name).page params[:page]
      render json: @beers, meta: pagination_dict(@beers)
    end
    #Displays all beer
    def show
      @beer = Beer.find(params[:id])
      render json: @beer
    end
    def untapshow
      @beer = Untappd::Beer.info(params[:id])
        render json: @beer
    end
    def untapsearch
      @beers = Untappd::Beer.search(params[:name])
        render json: @beers
    end
    def venue_instock
      @beers = Untappd::Beer.feed(params[:bid])
      render json: @beers
    end
    def pagination_dict(object)
      {
        current_page: object.current_page,
        next_page: object.next_page,
        prev_page: object.prev_page, # use object.previous_page when using will_paginate
        total_pages: object.total_pages,
        total_count: object.total_count
      }
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
    # used to test seed results in Postman
end
