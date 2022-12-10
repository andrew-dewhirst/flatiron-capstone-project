class UserSerializer < ActiveModel::Serializer
include Rails.application.routes.url_helpers
  attributes :id, :first_name, :last_name, :email, :birthday, :username, :avatar

  has_many :carts
  has_many :reviews

  def avatar
    rails_blob_path(object.avatar, only_path: true) if object.avatar.attached?
  end

end
