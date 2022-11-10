class CartSerializer < ActiveModel::Serializer
  attributes :id, :has_converted

  has_many: line_items
end
