class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :birthday, :username

  has_many :carts
  has_many :reviews
end
