require_relative 'spec_helper'

describe User do

  before :each do
    @user = User.new "name", "email", "password", "image"
  end

  describe "#sign_up" do

    it "returns a new user object" do
      @user.should(be_an_instance_of(User))
    end

    it "should require name,email,password params and return user object" do
      lambda(User.new "email", "password") should raise_exception with ArgumentError

    end

  describe "#email"
    it "should return the correct email address for the user" do
      @user.email should == "email"
    end

    #
    # it "should return the correct name for the user" do
    #   @user.name should eql "name"
    # end
    #
    # it

  end

end
