Untappd.configure do |config|
  config.client_id = ENV['ClientID']
  config.client_secret = ENV['ClientSecret']
  # config.redirect_url = 'YOUR_OAUTH_REDIRECT_URL' # only if you're using OAuth
  config.gmt_offset = -5
end
