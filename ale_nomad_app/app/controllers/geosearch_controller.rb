class GeosearchController < ApplicationController



  def distance
    @somewhere = params[:address]
    @range =params[:range]
    @within_distance = Location.within(@range, :origin => @somewhere)
    render json: @within_distance
  end






end
