class Review < ApplicationRecord
  validates :rating, :user_id, presence: true

  belongs_to :user
  belongs_to :beer


  def self.timeline(user)
    following_ids = user.followees(User).pluck(:id)
    all_ids = following_ids << user.id
    where(user_id: all_ids).order("created_at DESC")
  end

end
