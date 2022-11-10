class CardSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :condition, :price, :quantity, :genre, :image

  has_many: line_items
  has_many :reviews
end
