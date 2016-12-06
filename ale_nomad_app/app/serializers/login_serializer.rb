class LoginSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :api_token, :picture, :following

def following
  if current_user
    object.followed_by?(current_user)
  else
    false
  end
end


def picture
  Refile.attachment_url(object, :picture, :fit, 100, 100, format: "jpg")
end
end
