class Review < ApplicationRecord
  validates_presence_of :rating, :user_id, :beer_id

  belongs_to :user
  belongs_to :beer

  def self.timeline(user)
    following_ids = user.followees(User).pluck(:id)
    all_ids = following_ids << user.id
    where(user_id: all_ids).order("created_at DESC")
  end

end
