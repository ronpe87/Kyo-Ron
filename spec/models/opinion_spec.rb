require 'rails_helper'

RSpec.describe Opinion, type: :model do
  let!(:user) do
    User.create!({
      email: 'test@example.com',
      password: 'password'
    })
  end

  context 'タイトルと内容が入力されている場合' do
    let!(:opinion) do
      user.opinions.build({
        title: Faker::Lorem.characters(number: 10),
        content: Faker::Lorem.characters(number: 300)
      })
    end

    it '記事を保存できる' do
      expect(opinion).to be_valid
    end
  end

  context 'タイトルの文字が１文字の場合' do
    let!(:opinion) do
      user.opinions.create({
        title: Faker::Lorem.characters(number: 1),
        content: Faker::Lorem.characters(number: 300)
      })
    end

    it '記事を保存できない' do
      expect(opinion.errors.messages[:title][0]).to eq('は3文字以上で入力してください')
    end
  end
end
