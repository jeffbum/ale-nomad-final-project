class BeerOfDayMailer < ApplicationMailer

  def beer_of_the_day(user, beer, brew)
    @user = user
    @beer = beer
    @brew = brew
    mail(to: @user.email, subject: 'Ale Nomad: Beer/brewery of the Day')
  end

end
