desc "This task is called by the Heroku scheduler add-on"


task :send_beers => :environment do
  Beer.weekly_beer
end
