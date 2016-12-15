class GeosearchController < ApplicationController



  def distance
    @address = params[:address]
    @range =params[:range]
    @within_distance = Brew.within(@range, :origin => @address)
    render json: @within_distance
  end





end
