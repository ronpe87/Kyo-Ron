require 'rails_helper'

RSpec.describe Opinion, type: :model do
  let!(:user) { create(:user) }

  context 'タイトルと内容が入力されている場合' do
    let!(:opinion) { build(:opinion, user: user) }

    it '記事を保存できる' do
      expect(opinion).to be_valid
    end
  end

  context 'タイトルの文字が１文字の場合' do
    let!(:opinion) { build(:opinion, title: Faker::Lorem.characters(number: 1), user: user) }

    before do
      opinion.save
    end

    it '記事を保存できない' do
      expect(opinion.errors.messages[:title][0]).to eq('は3文字以上で入力してください')
    end
  end
end
