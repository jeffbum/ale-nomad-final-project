class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :api_token, :image, :following

def following
  if current_user
    object.followed_by?(current_user)
  else
    false
  end
end


def image
  Refile.attachment_url(object, :avatar, :fit, 100, 100, format: "jpg")
end


end
