class Skill < ApplicationRecord
    has_many :users
    has_many :skills, through: :users
end
