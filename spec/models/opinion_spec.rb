require 'rails_helper'

RSpec.describe Opinion, type: :model do
  context 'タイトルと内容が入力されている場合' do
    before do
      user = User.create!({
        email: 'test@example.com',
        password: 'password'
      })
      @opinion = user.opinions.build({
        title: Faker::Lorem.characters(number: 10),
        content: Faker::Lorem.characters(number: 300)
      })
    end

    it '記事を保存できる' do
      expect(@opinion).to be_valid
    end
  end
end
