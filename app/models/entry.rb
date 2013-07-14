class Entry < ActiveRecord::Base
  attr_accessible :address, :name, :tag
  validates :name, presence: true, uniqueness: true
  validates_format_of :address, :with=>URI::regexp(%w(http https))
end
