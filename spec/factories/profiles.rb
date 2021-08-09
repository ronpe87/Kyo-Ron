FactoryBot.define do
  factory :profile do
    bio { Faker::Lorem.characters(number: 100) }
  end
end
