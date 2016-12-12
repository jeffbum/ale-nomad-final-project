class Beer < ApplicationRecord
  has_many :reviews
  has_many :drinks
  has_many :users, through: :drinks
  belongs_to :brew
  belongs_to :category
  attachment :beer_label
  paginates_per 50

  include PgSearch

  pg_search_scope :search_by_all, associated_against: {
    category: :name
  }, against: [:name, :abv, :ibu]

  def self.weekly_beer
    @beer = Beer.all.sample
    @brew = Brew.all.sample
    @users = User.all
    @users.each do |user|
      BeerOfDayMailer.beer_of_the_day(user, @beer, @brew).deliver
    end
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
end
