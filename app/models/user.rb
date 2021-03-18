class User < ApplicationRecord
  has_many :grades
  has_many :skills, through: :grades

  ## self is the user that called this method
  ## would be better to do this with sql or serillizer but
  ## good model practice
  def get_skills_with_grades
    self.skills.map do |skill|
      #use debugger/pry to find
      score = skill.grades.find_by(user_id: self.id).score
      {skill: skill, score: score}
    end
  end
end
