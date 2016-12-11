class Brew < ApplicationRecord

  has_many :beers
  attachment :images
  acts_as_mappable
  paginates_per 50

  def weekly_brew
    @weekly_brew = []
    @weekly_brew << Brew.all
    @weekly_brew = @weekly_brew.shuffle.sample
    render json: @weekly_brew
  end

end
