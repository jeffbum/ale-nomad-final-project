class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :images, :following

def following
  if current_user
    object.followed_by?(current_user)
  else
    false
  end
end


def images
  Refile.attachment_url(object, :images, :fit, 100, 100, format: "jpg")
end


end
