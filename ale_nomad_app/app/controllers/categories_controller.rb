class CategoriesController < ApplicationController


  def show
    @category = Catagory.find_by(id: params[:id])
    render json: @category
  end


  def filter
    @beers = Beer.all
    if params[:search]
      @beers = @beers.search_by_name(params[:search])
    end
    @beers.order(params[:order] || { created_at: :desc })
    @beers = @beers.ransack(params[:filter]).result
    @beers = @beers.to_a.uniq
    render json: @beers
  end




end
