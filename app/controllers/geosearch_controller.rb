class GeosearchController < ApplicationController



  def distance
    @address = params[:address]
    @range =params[:range]
    @within_distance = Brew.within(@range, :origin => @address).order('distance DESC')
    render json: @within_distance
  end



end
