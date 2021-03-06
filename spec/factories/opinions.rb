FactoryBot.define do
  factory :opinion do
    title { Faker::Lorem.characters(number: 10) }
    content { Faker::Lorem.characters(number: 300) }
    red_opinion { Faker::Lorem.characters(number: 30) }
    blue_opinion { Faker::Lorem.characters(number: 30) }
  end
end
