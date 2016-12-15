require 'rails_helper'

RSpec.describe User, type: :model do

  it "is valid with valid attributes" do
    expect(User.new(name: "Matt",
                    email: "matt@example.com",
                    password: "1234567",
                    images_id: "image"
          )).to be_valid
  end

  it "is not valid without a email" do
    expect(User.new(name: "Matt",
                    email: nil,
                    password: "1234567",
                    images_id: "image"
          )).to_not be_valid
  end
  it "is not valid without a password" do
    expect(User.new(name: "Matt",
                    email: "matt@example.com",
                    password: nil,
                    images_id: "image"
          )).to_not be_valid
  end
end
