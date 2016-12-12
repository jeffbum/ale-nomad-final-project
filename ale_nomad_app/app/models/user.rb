class User < ApplicationRecord

  has_secure_password
  acts_as_follower
  acts_as_followable
  has_secure_token :api_token
  attachment :images

  has_many :reviews
  has_many :drinks
  has_many :beers, through: :drinks

  validates :name, presence: true

  validates :email,
    presence: true,
    uniqueness: true,
    format: /\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\b/

    
end
