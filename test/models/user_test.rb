require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end

  def can_create_a_user(:name, :email, :password, )
    @user = User.new

    assert @user?
  end
end
