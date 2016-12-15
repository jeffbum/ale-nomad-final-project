class CategoriesController < ApplicationController

  def show
    @category = Catagory.find_by(id: params[:id])
    render json: @category
  end
end
