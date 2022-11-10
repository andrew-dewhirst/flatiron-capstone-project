class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :rating, :user_id, :card_id
end
