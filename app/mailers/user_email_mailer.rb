class UserEmailMailer< ActionMailer::Base

    def send_signup_email(user)
      @user = user
      mail( :to => @user.email,
      :subject => "#{user.name}, Thanks for signing up for Ale Nomad")
    end
end
